<template>
  <div>
    <app-header />
    <button type="button" v-on:click="pageName = 'MainPage'">
      메인으로 가기
    </button>
    <ul class="link-list">
      <li>
        <button type="button" v-on:click="pageName = 'Decotter'">1</button>
      </li>
      <li>
        <button type="button" v-on:click="pageName = 'Comment'">2</button>
      </li>
      <li>
        <button type="button" v-on:click="pageName = 'Collaboration'">3</button>
      </li>
    </ul>
    <div>
      <component v-bind:is="pageName" />
    </div>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import MainPage from "@/components/mainPage.vue";
import Decotter from "@/components/decotter.vue";
import Comment from "@/components/comment.vue";
import Collaboration from "@/components/collaboration.vue";
import AppHeader from "@/components/common/AppHeader";

export default {
  data() {
    return {
      pageName: "MainPage",
      username: "test@test.com",
      password: "testtest",
      logMessage: "",
    };
  },
  mounted() {
    this.submitForm();
  },
  components: { AppHeader, MainPage, Decotter, Comment, Collaboration },
  methods: {
    async submitForm() {
      if (!this.username || !this.password) {
        alert("Fill in the account information");
        return;
      }
      try {
        const response = await this.$store.dispatch("LOGIN", {
          username: this.username,
          password: this.password,
        });
        bus.$emit("show:toast", response.data.message);
        //this.$router.push("/");
        this.initForm();
      } catch (error) {
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>
