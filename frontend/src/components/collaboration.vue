<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div>
    <ul>
      <li v-for="(slide, index) in slideData" :key="index" @click="open(index)">
        <div>{{ slide.title }}</div>
      </li>
    </ul>
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
</template>

<script>
import modal from "./modal";
export default {
  data() {
    return {
      showModal: false,
      slideData: [
        {
          title: "지은유55",
          img: "/images/test.jpg",
        },
        {
          title: "지은유",
          img: "/images/test.jpg",
        },
        {
          title: "지은유1",
          img: "/images/test.jpg",
        },
        {
          title: "지은유2",
          img: "/images/test.jpg",
        },
        {
          title: "지은유3",
          img: "/images/test.jpg",
        },
        {
          title: "지은유4",
          img: "/images/test.jpg",
        },
        {
          title: "지은유5",
          img: "/images/test.jpg",
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
	 * The following styles are auto-applied to elements with
	 * transition="modal" when their visibility is toggled
	 * by Vue.js.
	 *
	 * You can easily play with the modal transition by editing
	 * these styles.
	 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
