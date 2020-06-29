<template>
  <div class="app" style="text-align:center">
    <button type="button" v-on:click="pageName = 'Main'">메인으로 가기</button>
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
    <router-view></router-view>
    <component v-bind:is="pageName"/>
  </div>
<!--  <div class="app">-->
<!--    <AppHeader></AppHeader>-->
<!--    <div class="app-contents">-->
<!--      <router-view></router-view>-->
<!--    </div>-->
<!--    <AppFooter></AppFooter>-->
<!--    <ToastPopup></ToastPopup>-->
<!--  </div>-->
</template>

<script>
  import Main from "./components/main.vue";
  import Decotter from "./components/decotter.vue";
  import Comment from "./components/comment.vue";
  import Collaboration from "./components/collaboration.vue";
// import AppHeader from "./components/common/AppHeader.vue";
// import AppFooter from "./components/common/AppFooter.vue";
// import ToastPopup from "./components/common/ToastPopup.vue";

export default {
  data(){
    return {
      pageName : 'Main'
    }
  },
  components: {
    // AppHeader,
    // ToastPopup,
    // AppFooter,
    Main,
    Decotter,
    Comment,
    Collaboration
  }
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/common.css";

.link-list{text-align:center}
.link-list li{display:inline-block}
</style>
