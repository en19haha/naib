<template>
  <div class="message-wrap">
      <div class="section">
          <ul v-if="postItems" class="comment-list">
              <li v-for="(item, index) in postItems" :key="index">
                  <!--        <div><span>id :</span> {{ item.title }}</div>-->
                  <div> <span>축하 멘트 :</span>{{ item.contents }}</div>
              </li>
          </ul>
          <div class="comment">
              <form @submit.prevent="submitForm" class="form">
               <div class="inner">
                   <i class="icon-mail"></i>
                   <label class="id">
                       <input type="text" v-model="title" placeholder="트위터 아이디"/>
                   </label>
                   <label class="message">
                       <input type="text" v-model="contents"  placeholder="메세지를 입력해 주세요"/>
                   </label>
                   <button type="submit"><span>SEND</span></button>
               </div>
              </form>
          </div>
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
