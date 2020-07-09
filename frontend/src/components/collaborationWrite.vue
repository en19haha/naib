<template>
	<div>
		<ul class="link-list">
			<li>
				<button type="button" v-on:click="pageName = 'view01'">white01</button>
			</li>
			<li>
				<button type="button" v-on:click="pageName = 'view02'">white02</button>
			</li>
		</ul>
		<component v-bind:is="pageName"/>
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
