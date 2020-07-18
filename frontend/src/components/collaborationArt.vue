<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div class="wrap">
    <div class="section">

      <div class="inner">
        <h1 class="happy-title">
          <img src="../assets/images/title_coll.png" alt="">
        </h1>
        <ul class="thum-list">
          <li v-for="(slide, index) in slideData" :key="index" @click="open(index)">
            <div class="thum">
              <img :src="slide.img" alt="">
            </div>
          </li>
        </ul>
	      <router-link to="/collaboration" class="btn-back"><img src="../assets/images/back.png" alt=""></router-link>
      </div>
      <!--<button id="show-modal">Show Modal1</button>
	  <button id="show-modal" @click="showModal = true">Show Modal2</button>
	  <button id="show-modal" @click="showModal = true">Show Modal3</button>-->

      <modal
              v-if="showModal"
              v-bind:slideData="slideData"
              v-bind:openIndex="openIndex"
              @close="showModal = false"
      >
        <h3 slot="header">custom header</h3>
      </modal>
    </div>
  </div>
</template>

<script>
import modal from "./modal";
export default {
  data() {
    return {
      showModal: false,
      slideData: [
        {
          title: "릴",
          img: require("@/assets/images/collabo/01.jpg"),
        },
        {
          title: "비향",
          img: require("@/assets/images/collabo/02.png"),
        },
        {
          title: "수사",
            img: require("@/assets/images/collabo/03.png"),
        },
        {

            img: require("@/assets/images/collabo/04.png"),
        },
        {
          title: "연탄콩",
            img: require("@/assets/images/collabo/05.png"),
        },
        {
          title: "echu",
            img: require("@/assets/images/collabo/06.png"),
        },
        {
          title: "지은유07",
          img: "http://placehold.it/400x200",
        },
          {
              title: "지은유08",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유09",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유10",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유11",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유12",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유13",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유14",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유15",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유16",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유17",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유18",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유19",
              img: "http://placehold.it/400x200",
          },
          {
              title: "지은유20",
              img: "http://placehold.it/400x200",
          },
      ],
      openIndex: null,
    };
  },
  components: {
    modal,
  },
  methods: {
    callback() {},
    open(index) {
      this.showModal = true;
      this.openIndex = index;
    },
  },
  mounted() {},
};
</script>
<style>

</style>
