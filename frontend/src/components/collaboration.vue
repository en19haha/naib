<template>
	<div class="section">
		<div class="inner">
			<h1 class="happy-title">
				<img src="../assets/images/title_coll.png" alt="">
			</h1>
			<ul class="nav-list" style="width:425px;">
				<li class="art"><router-link to="/collaboration/art"><span>ART</span></router-link></li>
				<li class="write"><router-link to="/collaboration/write"><span>Write</span></router-link></li>
			</ul>
			<hr class="green-hr">
			<p class="main-desc">
				//<br><br>

				나이브 생일 기념 합작을 공개합니다.<br>
				참여해주신 모든 분들, 감사합니다!<br><br>

				//
			</p>
			<hr class="green-hr mt45">
		</div>
	</div>
</template>
<script>
	export default {
		name: "collaboration",
	}
</script>
<style scoped></style>
