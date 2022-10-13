<script setup>
const props = defineProps(["color1", "color2", "img"]);
</script>

<template>
  <div id="menubox" :style="`background:linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`">
    <img :src="props.img" alt="icon"/>
  </div>
</template>

<style scoped>
#menubox {
  width: 60px;
  height: 60px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 18px;
}

#menubox img {
  width: 30px;
  height: 30px;
}
</style>
