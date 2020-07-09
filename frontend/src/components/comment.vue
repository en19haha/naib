<template>
  <div class="section">
    <h1>이 안에서 자유롭게 하십시오 컨텐츠는 하단에 있는 애들이 들어갑니다.</h1>
    <ul v-if="postItems" class="comment-list">
      <li v-for="(item, index) in postItems" :key="index">
<!--        <div><span>id :</span> {{ item.title }}</div>-->
        <div> <span>축하 멘트 :</span>{{ item.contents }}</div>
      </li>
    </ul>
    <div class="comment">
      <form @submit.prevent="submitForm" class="form">
        <label>
          <span>트위터 아이디</span>
          <input type="text" v-model="title" />
        </label>
        <label>
          <span>축하멘트</span>
          <input type="text" v-model="contents" />
        </label>
        <button type="submit">입력</button>
      </form>
    </div>
  </div>
</template>
<script>
import { createNewPost, fetchPosts } from "@/api/posts";
import bus from "@/utils/bus";

export default {
  name: "comment",
  data() {
    return {
      title: "",
      contents: "",
      resultMessage: "",
      postItems: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const {
          data: { posts: postItems },
        } = await fetchPosts();
        ``;
        this.postItems = postItems;
        return;
      } catch (error) {
        console.log(error);
      }
    },
    async submitForm() {
      try {
        const response = await createNewPost({
          title: this.title,
          contents: this.contents,
        });
        bus.$emit("show:toast", `${response.data.data.title} was created`);
        //this.$router.push("/");
        this.fetchData();
      } catch (error) {
        console.log(error);
        this.resultMessage = error.data.message;
      }
    },
  },
};
</script>
<style scoped>
input {
  border: 1px solid red;
}
</style>
