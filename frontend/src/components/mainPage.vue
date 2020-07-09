<template>
  <div class="section">
    <ul class="nav-list">
      <li><router-link to="/icondeco">decotter</router-link></li>
      <li><router-link to="/message">message</router-link></li>
      <li><router-link to="/collaboration">collaboration</router-link></li>
    </ul>
    <div class="guide-box">
      <h1> 메인 요기 안에서 디자인 자유롭게<br>
      높이 값은 상관없음</h1>
    </div>
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
