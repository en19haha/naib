<template>
	<div style="text-align:center">
		<ul v-if="commentItems">
			<li v-for="(comments , index) in commentItems" :key="index">
				id : {{comments.userId}} <br>
				멘트 :{{comments.txt}}
			</li>
		</ul>
		<form @submit.prevent="submitForm" class="form">
			<label>
				id:
				<input type="text" v-model="userId">
			</label>
			<label>
				축하멘트:
				<input type="text" v-model="txt">
			</label>
			<button type="submit">입력</button>
		</form>

	</div>
</template>
<script>
	import { createNewComment, fetchComments } from '@/api/comments';
	import bus from "@/utils/bus";

	export default {
		name: "comment",
		data() {
			return {
				comments: [
					{
						"txt": "코멘트 1",
						"id" : 'id'
					},
					{
						"txt": "코멘트 2",
						"id" : 'id'
					}
				],
				txt : '',
				userId :'',
				commentItems: null,
			}
		},
		created() {
			this.fetchComments();
		},
		methods :{
			async fetchComments() {
				try {
					const {
						data: { comments: commentItems },
					} = await fetchComments();
					this.commentItems = commentItems;
					return;
				} catch (error) {
					console.log(error);
				}
			},
			async submitForm() {
				try {
					const response = await createNewComment({
						txt: this.txt,
						userId: this.userId,
					});
					//bus.$emit('show:toast', `${response.data.data.title} was created`);
					this.$router.push('/');
				} catch (error) {
					console.log(error);
					//this.resultMessage = error.data.message;
				}
			},
		}
	}
</script>
<style scoped>
	input{
		border:1px solid red;
	}
</style>
