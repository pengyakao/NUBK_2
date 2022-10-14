<script setup>
import MenuBox from "./components/MenuBox.vue";
</script>

<template>
  <div class="about">
    <!-- menubox -->
    <div id="menu-outer-2">
      <div class="row">
        <div class="col-3">
          <MenuBox
            color1="#70BDF9"
            color2="#5685F3"
            icon="fas fa-user-nurse"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#F6DC4F"
            color2="#EEAF3B"
            icon="fas fa-user-hard-hat"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#7DE2C5"
            color2="#56B899"
            icon="fas fa-file-alt"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#F197CA"
            color2="#E93E8E"
            icon="fas fa-dollar-sign"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#F1A064"
            color2="#E9703E"
            icon="fas fa-hand-paper"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#79D4DE"
            color2="#5AB4BC"
            icon="fas fa-laptop"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#F08E9D"
            color2="#EA4857"
            icon="fas fa-headphones"
          />
        </div>
        <div class="col-3">
          <MenuBox
            color1="#CA8ADB"
            color2="#B863CF"
            icon="fas fa-question"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
