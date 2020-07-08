<template>
  <div style="text-align: center;">
    <ul class="nav-list">
      <li><router-link to="/icondeco">decotter</router-link></li>
      <li><router-link to="/message">message</router-link></li>
      <li><router-link to="/collaboration">collaboration</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {
      pageName : 'MainPage'
    }
  },
};
</script>
<style scoped></style>
