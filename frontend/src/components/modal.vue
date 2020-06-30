<template
  ><transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!--<div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>-->

          <div class="modal-body">
            <slot name="body">
              <div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(slide, index) in slideData"
                    :key="index"
                  >
                    {{ slide.title }}
                  </div>
                </div>

                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination"></div>
              </div>
            </slot>
          </div>

          <button class="modal-default-button" @click="$emit('close')">
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        initialSlide: this.openIndex,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: ["slideData", "openIndex"],
};
</script>
