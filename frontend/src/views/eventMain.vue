<template>
  <div class="wrap">
    <MainPage></MainPage>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import MainPage from "@/components/mainPage.vue";
import AppHeader from "@/components/common/AppHeader";

export default {
  data() {
    return {
      username: "test@test.com",
      password: "testtest",
      logMessage: "",
    };
  },
  mounted() {
    this.submitForm();
  },
  components: { AppHeader, MainPage },
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
