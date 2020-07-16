<template>
  <div class="message-wrap">
      <div class="section">
          <div class="message-txt">
              {{ mee }}
          </div>
          <ul v-if="postItems" class="comment-list">
              <li v-for="(item, index) in postItems" :key="index">
                  {{ item.contents }}
              </li>
          </ul>

          <div class="naib">
              <img src="http://placehold.it/463x765" alt="">
          </div>
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
        username: "test@test.com",
        password: "testtest",
        logMessage: "",
        title: "",
        contents: "",
        cmtKey: this.$id('ddd'),
        resultMessage: "",
        postItems: null,
        mee:''
    };
  },
  created() {
    this.fetchData();
  },
    mounted() {
        this.login();
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
          if(this.title == '' || this.contents == ''){
              alert('메세지를 입력해주세요')
          }else{
              const response = await createNewPost({
                  title: this.title,
                  contents: this.contents,
                  cmtKey: this.cmtKey,
              });
              bus.$emit("show:toast", `${response.data.data.title} was created`);
              //this.$router.push("/");
              this.fetchData();
              this.mee = this.contents;
              document.querySelector('.message-txt').classList.add('active');
              this.title = ''
              this.contents = ''
              // setTimeout(function () {
              //   document.querySelector('.message-txt').classList.remove('active');
              // },5000)
          }
      }catch (error) {
          console.log(error.data.error.errmsg);
          this.resultMessage = error.data.message;
      }

    },
    async login() {
      if (!this.username || !this.password) {
          alert("Fill in the account information");
          return;
      }
      try {
          const response = await this.$store.dispatch("LOGIN", {
              username: this.username,
              password: this.password,
          });
          bus.$emit("show:toast", response.data.message);
          //this.$router.push("/");
          this.initForm();
      } catch (error) {
          this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>
<style scoped>
    .comment2-list {
        position:absolute; top:0; left:0; color:#fff;
        font-size:400px;
    }
input {
  border: 1px solid red;
}
</style>
