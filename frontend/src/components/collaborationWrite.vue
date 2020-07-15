<template>
	<div class="wrap">
		<div class="section">

			<div class="inner">
				<h1 class="happy-title">
					<img src="../assets/images/title_coll.png" alt="">
				</h1>
				<ul class="link-list">
					<li v-on:click="pageName = 'view01'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
					<li v-on:click="pageName = 'view02'">
						<img src="../assets/images/write/01.png" alt="">
					</li>
				</ul>
				<div class="cont">
					<component v-bind:is="pageName"/>
				</div>
				<router-link to="/collaboration" class="btn-back"><img src="../assets/images/back.png" alt=""></router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import view01 from "@/components/write/view01";
	import view02 from "@/components/write/view02";

	export default {
		data(){
			return {
				pageName : 'view01'
			}
		},
		components: {
			view01,
			view02,
		}
	};
</script>

<style></style>
