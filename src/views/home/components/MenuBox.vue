<script>
export default {
  setup() {
    return {};
  },
  components: {},
  props: ["color1", "color2", "icon"],
};

// const props = defineProps(["color1", "color2", "img"]);
// 下面就不用 porps.img
</script>

<template>
  <div
    id="menubox"
    :style="`background:linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`"
  >
    <div class="menu-img">
      <i :class=icon></i>
    </div>
    
  </div>
</template>

<style scoped>
#menubox {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin: 12px 18px;
}

.menu-img {
  display: inline-block;
  margin: 0 auto 0.375rem;
  width: 3.75rem;
  height: 3.75rem;
  color: white;
  font-size: 1.875rem;
  line-height: 3.75rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
