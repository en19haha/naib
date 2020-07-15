<template>
  <div class="app">
    <router-view></router-view>
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
export default {
  data() {
    return {
    }
  },
  components : {}
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@import url('assets/css/naib.css');
</style>

.link-list {
  text-align: center;
}
.link-list li {
  display: inline-block;
}
</style>
