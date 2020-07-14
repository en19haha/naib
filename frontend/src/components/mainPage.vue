<template>
  <div class="section">
	  <div class="inner">
		  <h1 class="happy-title">
			  <img src="../assets/images/title.png" alt="">
		  </h1>
		  <ul class="nav-list">
			  <li class="decotter"><router-link to="/icondeco"><span>decotter</span></router-link></li>
			  <li class="coming"><span>message</span></li>
			  <li class="coming"><span>collaboration</span></li>
		  </ul>
		  <hr class="green-hr">
		  <p class="main-desc">
			  //<br><br>

			  7월 23일, 나이브 수베다르의 생일을<br>
			  축하하기 위한 페이지입니다.<br><br>

			  //
		  </p>
		  <hr class="green-hr mt45">
		  <a href="https://twitter.com/naib_723" target="_blank" class="link-twitter"><span>twitter</span></a>
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
