<template>
  <div class="frame">
    <img class="blob" src="../../assets/blob.svg" alt="" />
    <img class="blob2" src="../../assets/blob2.svg" alt="" />
    <ChatInput @sending="sendMessage($event)" />
    <div ref="messages" class="messages">
      <ChatFirstMsg @typechosen="typeChosen()" />
      <template v-for="(message, index) in messages">
        <transition
          appear
          :key="'transitionText-' + index"
          name="pop"
          mode="out-in"
        >
          <ChatText :text="message.text" :who="message.sender" />
        </transition>
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
/* eslint-disable */
export default {
  name: "ChatFrame",
  components: {
    ChatInput,
    ChatText,
    ChatActions,
    ChatFirstMsg,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    analyseMessage(message) {
      // REGEX
      const renameRX = new RegExp(/(mon nom est|(suis|appelle))\s[a-z]+/gim);
      const ageRX = new RegExp(/ai\s\d+(\s)?ans?/gim);
      const donationRX = new RegExp(/(donations?)|(dons?)($|[^a-z])/gim);

      // CONDITIONS
      if (message.match(renameRX)) {
        const name = message.split(" ").pop();
        this.$store.commit("setUserName", name);
        this.setBotMessage("Tu t'appelles donc " + name);
        return;
      }
      if (message.match(ageRX)) {
        const age = message.match(/\d+/)[0];
        this.setBotMessage(`Tu as donc ${age} ans`);
        return;
      }
      if (message.match(donationRX)) {
        const actions = [
          {
            action: () =>
              window.open("https://www.fondationdelamer.org/don.php", "_blank"),
            label: "Faire un don",
          },
        ];
        this.setBotMessage(
          "Ce bouton amène vers les donations",
          "button",
          actions
        );
        return;
      }
      this.setBotMessage("HAHAHAHA");
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
    setBotMessage(text, type = "text", actions = []) {
      this.messages.push({
        text,
        type,
        sender: "bot",
        active: type === "button" ? true : false,
        actions,
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
      this.analyseMessage($event);

      // automatic scroll when sending a message
      this.scrollToBottom();
    },
    typeChosen() {
      const type = this.$store.getters.user.type;
      this.messages = [];

      if (type.match(/student/)) this.setBotMessage("Tu es donc un élève !");
      if (type.match(/prof/))
        this.setBotMessage("Vous êtes donc un professeur");
      if (type.match(/curious/))
        this.setBotMessage("Vous êtes donc une personne curieuse !");

      // says that the 1st msg was sent
      if (!this.$store.getters.firstMsg) this.$store.commit("sendFirstMsg");

      this.scrollToBottom();
    },
  },
  mounted() {
    // WELCOME MESSAGE
    // const actions = [
    //   {
    //     action: () => this.$store.commit("nextStep", 1),
    //     label: "Enseignant(e)",
    //   },
    //   {
    //     action: () => this.$store.commit("nextStep", 10),
    //     label: "Élève",
    //   },
    //   {
    //     action: () => this.$store.commit("nextStep", 10),
    //     label: "Autre",
    //   },
    // ];
    // this.setBotMessage(
    //   `<p>Salut ! Je suis Capitaine MOMO.<p>
    //   <br />
    //    <p>Dites-moi ce que vous souhaitez chercher et je m’occupe du reste ! Vous pouvez aussi utiliser le vocal qui trouve à coté de la zone de texte. </p>
    //    <br />
    //    <p>Avant de hisser les voiles, vous êtes :</p>
    //    `,
    //   "button",
    //   actions
    // );
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
