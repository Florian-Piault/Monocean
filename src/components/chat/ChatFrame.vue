<template>
  <div class="frame">
    <!-- DROPDOWN INPUT OPTIONS -->
    <template v-if="ddOptions">
      <transition duration="200" appear name="pop" mode="out-in">
        <Dropdown :options="ddOptions" :element="ddRef" />
      </transition>
    </template>

    <!-- MODALE SEARCH -->
    <template v-if="modOptions">
      <transition duration="200" appear name="pop" mode="out-in">
        <Modale :options="modOptions" @closeevent="showModaleEvent()" />
      </transition>
    </template>

    <!-- BLOBS -->
    <img class="blob" src="../../assets/blob.svg" alt="" />
    <img class="blob2" src="../../assets/blob2.svg" alt="" />

    <!-- INPUTS -->
    <ChatInput
      @sending="sendMessage($event)"
      @showevent="showDrop"
      :isOpen="ddOptions !== null"
    />
    <div ref="messages" class="messages">
      <ChatFirstMsg @typechosen="typeChosen()" />

      <!-- MESSAGES TEXTES -->
      <template v-for="(message, index) in messages">
        <transition
          appear
          :key="'transitionText-' + index"
          name="pop"
          mode="out-in"
        >
          <ChatText :text="message.text" :who="message.sender" />
        </transition>

        <!-- MESSAGES BUTTONS -->
        <template v-if="message.active">
          <transition
            appear
            :key="'transitionActions-' + index"
            name="pop"
            mode="out-in"
          >
            <ChatActions :actions="message.actions" />
          </transition>
        </template>

        <!-- MESSAGES SEARCHES -->
        <template v-if="message.searches">
          <transition
            appear
            :key="'transitionSearch-' + index"
            name="pop"
            mode="out-in"
          >
            <ChatSearches
              :searches="message.searches"
              @showmodale="showModaleEvent"
            />
            {{ message.searches }}
          </transition>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
// MODELS
/*
  messages: [{
    text: string,
    type: string,
    sender: string,
    actions: [{
      actions: method,
      label: string
    }]
  }]
*/

import ChatInput from "./ChatInput.vue";
import ChatText from "./ChatText.vue";
import ChatActions from "./ChatActions.vue";
import ChatFirstMsg from "./ChatFirstMsg.vue";
import ChatSearches from "./ChatSearches.vue";
import Dropdown from "../Dropdown.vue";
import Modale from "../Modale.vue";

/* eslint-disable */
export default {
  name: "ChatFrame",
  components: {
    ChatInput,
    ChatText,
    ChatActions,
    ChatFirstMsg,
    Dropdown,
    Modale,
    ChatSearches,
  },
  data() {
    return {
      messages: [],
      ddOptions: null,
      ddRef: null,
      modOptions: null,
    };
  },
  methods: {
    getSearches(term) {
      if (term.match(/tortues?/i)) {
        return [
          {
            type: "Article",
            image: "turtle1.jpg",
            titre: "La relation des tortues avec les coraux",
          },
          {
            type: "Article",
            image: "turtle2.jpg",
            titre: "Les tortues et l'eau salée.",
          },
          {
            type: "Article",
            image: "turtle3.jpg",
            titre:
              "Les conséquences de la pollution aquatique sur les tortues.",
          },
          {
            type: "Article",
            image: "turtle4.jpg",
            titre: "Les tortues : de bébé à adulte.",
          },
          {
            type: "Article",
            image: "turtle5.jpg",
            titre: "L'alimentation des tortues.",
          },
        ];
      }
    },
    analyseMessage(message) {
      const type = this.$store.getters.user.type;

      // REGEX
      const renameRX = new RegExp(/(mon nom est|(suis|appelle))\s[a-z]+/gim);
      const ageRX = new RegExp(/(ai\s)?\d+(\s)?ans?/gim);
      const donationRX = new RegExp(/(donations?)|(dons?)($|[^a-z])/gim);
      const searchRX = new RegExp(
        /((re)?cherche|trouve)[srz]?((-|\s)?(moi|nous))?\s?(([ld]es)?\s?((info)?(rmation)|(d[eé]tail)|(m[eé]dia)|(article)|([eé]tude)|(renseignement)|(donn[ée]e))?s?\s)?((sur|pour)\s)?([ld]es)?\s?[a-z]{3,}/gim
      );
      // CONDITIONS

      // RENOMAGE
      if (message.match(renameRX)) {
        const name = message.split(" ").pop();
        this.$store.commit("setUserName", name);
        if (type === "curious" || type === "student")
          return this.setBotMessage("Tu t'appelles donc " + name);
        else return this.setBotMessage("Votre nom est donc " + name);
      }

      // DONNER SON AGE
      if (message.match(ageRX)) {
        const age = message.match(/\d+/)[0];
        this.$store.commit("setUserAge", age);
        return this.setBotMessage(`Tu as donc ${age} ans`);
      }

      // FAIRE UNE DONATION
      if (message.match(donationRX)) {
        const actions = [
          {
            action: () =>
              window.open("https://www.fondationdelamer.org/don.php", "_blank"),
            label: "Faire un don",
          },
        ];
        return this.setBotMessage(
          "Ce bouton amène vers les donations",
          "button",
          actions
        );
      }

      // RECHERCHE
      if (message.match(searchRX)) {
        const searchTerm = message.split(" ").pop();
        const searchesArr = this.getSearches(searchTerm);
        return this.setBotMessage(
          `Voici des résultats sur : ${searchTerm}`,
          "search",
          [],
          searchesArr
        );
      }

      // PAS COMPRIS
      if (type === "curious" || type === "student")
        this.setBotMessage("Je n'ai pas compris ce que tu as écris !");
      else this.setBotMessage("Désolé, je n'ai pas compris.");
    },
    setUserMessage(text) {
      this.messages.push({
        text,
        type: "text",
        sender: "user",
        actions: [],
      });
      this.$store.commit("nextStep");
    },
    setBotMessage(text, type = "text", actions = [], searches = []) {
      this.messages.push({
        text,
        type,
        sender: "bot",
        active: type === "button" ? true : false,
        actions,
        searches,
      });
    },
    scrollToBottom() {
      const divToScroll = this.$refs.messages;

      window.setTimeout(
        () =>
          divToScroll.scrollTo({
            bottom: 0,
            top: divToScroll.scrollHeight,
            behavior: "smooth",
          }),
        0
      );
    },
    sendMessage($event) {
      if (!this.$store.getters.firstMsg) this.$store.commit("sendFirstMsg");

      this.setUserMessage($event);
      this.analyseMessage($event.trim());

      // automatic scroll when sending a message
      this.scrollToBottom();
    },
    typeChosen() {
      const type = this.$store.getters.user.type;
      this.messages = [];

      if (type.match(/student/)) {
        let msg = "<p>Tu es donc un élève !<p>";
        if (!this.$store.getters.user.age) msg += "<p>Quel âge as-tu ?</p>";
        this.setBotMessage(msg);
      }
      if (type.match(/prof/))
        this.setBotMessage("Vous êtes donc un professeur.");
      if (type.match(/family/))
        this.setBotMessage(
          "Vous recherchez donc quelque chose pour un membre de votre famille."
        );
      if (type.match(/curious/))
        this.setBotMessage("Vous êtes donc une personne curieuse !");

      // says that the 1st msg was sent
      if (!this.$store.getters.firstMsg) this.$store.commit("sendFirstMsg");

      this.scrollToBottom();
    },
    showDrop(option, ref) {
      if (!this.ddOptions && !this.ddRef) {
        this.ddOptions = option;
        this.ddRef = ref;
        return;
      }
      this.ddOptions = null;
      this.ddRef = null;
    },
    showModaleEvent(search = "") {
      !this.modOptions ? (this.modOptions = search) : (this.modOptions = null);
    },
  },
  // SET STEP OF STORY
  computed: {
    step() {
      return this.$store.getters.step;
    },
  },
  watch: {
    step() {
      console.log(this.$store.getters.step);
    },
  },
};
</script>

<style scope src="../../assets/css/chatFrame.css"></style>
