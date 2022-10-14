<script>
export default {
  setup() {
    return {};
  },
  components: {},
  props: ["color1", "color2", "icon","title","href"],
};

</script>

<template>
  <a :href=href class="menu-link">
    <div class="menu-img" :style="`background:linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`"><i :class=icon></i></div>
    <div class="menu-title">{{title}}</div>
  </a>
</template>

<style lang="scss" scoped>
@import "../../../assets/layout.scss";

</style>
