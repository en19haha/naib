<template>
	<div class="section">
		<h1>글 요기 안에서 디자인 자유롭게<br>높이 값은 상관없음</h1>
		<ul class="link-list">
			<li>
				<button type="button" v-on:click="pageName = 'view01'">글 1</button>
			</li>
			<li>
				<button type="button" v-on:click="pageName = 'view02'">글 2</button>
			</li>
		</ul>
		<div class="cont">
			<component v-bind:is="pageName"/>
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
