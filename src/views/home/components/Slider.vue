<script>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  setup() {
    return {};
  },
  components: {
      Swiper,
      SwiperSlide
    }
};
</script>

<template>
    <div class="swiper-container ui-slider">
        <swiper class="swiper-wrapper" :loop="false" :autoplay="{delay: 3000, stopOnLastSlide: false,disableOnInteraction: true}" >
            <swiper-slide class="swiper-slide" ><img src="slider_01.jpg" class="swiper-img" /></swiper-slide>
            <swiper-slide class="swiper-slide" ><img src="slider_02.jpg" class="swiper-img" /></swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.ui-slider .swiper-slide {
  position: relative;
}

.ui-slider .swiper-slide:after {
  content: "";
  display: block;
  padding-bottom: 56.25%;
}

.ui-slider .swiper-slide .swiper-img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}
.swiper {
  width: 100%;
  height: 100%;
}
</style>
