<template>
  <div>
    <ul v-if="postItems">
      <li v-for="(item, index) in postItems" :key="index">
        id : {{ item.title }} <br />
        멘트 :{{ item.contents }}
      </li>
    </ul>
    <form @submit.prevent="submitForm" class="form">
      <label>
        id:
        <input type="text" v-model="title" />
      </label>
      <label>
        축하멘트:
        <input type="text" v-model="contents" />
      </label>
      <button type="submit">입력</button>
    </form>
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
      cmtKey: new Date(),
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
          cmtKey: this.cmtKey,
        });
        bus.$emit("show:toast", `${response.data.data.title} was created`);
        //this.$router.push("/");
        this.fetchData();
      } catch (error) {
        console.log(error.data.error.errmsg);
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
