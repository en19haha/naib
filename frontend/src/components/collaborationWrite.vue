<template>
	<div class="wrap">
		<div class="section" id="top">
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

			</div>
		</div>
	</div>
</template>
<script>
	import view01 from "./write/view01";
	import view02 from "./write/view02";
	import mainWrite from "./write/mainWrite";

	export default {
		data(){
			return {
				pageName : 'mainWrite'
			}
		},
		components: {
			view01,
			view02,
            mainWrite
		}
	};
</script>

<style></style>
