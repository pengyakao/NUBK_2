<script setup>
import MenuBox from './components/MenuBox.vue'
</script>

<template>
  <div class="about">
    <MenuBox color1="#70BDF9" color2="#5685F3" img="/icon/footer/home.svg"/>
    <MenuBox color1="#F6DC4F" color2="#EEAF3B" img="/icon/footer/home.svg"/>
    <MenuBox color1="#7DE2C5" color2="#56B899" img="/icon/footer/home.svg"/>
    <MenuBox color1="#F197CA" color2="#E93E8E" img="/icon/footer/home.svg"/>
    <MenuBox color1="#F1A064" color2="#E9703E" img="/icon/footer/home.svg"/>
    <MenuBox color1="#79D4DE" color2="#5AB4BC" img="/icon/footer/home.svg"/>
    <MenuBox color1="#F08E9D" color2="#EA4857" img="/icon/footer/home.svg"/>
    <MenuBox color1="#CA8ADB" color2="#B863CF" img="/icon/footer/home.svg"/>
  </div>
</template>

<style scoped>
.about{
  display: flex;
  flex-wrap: wrap;
}
</style>