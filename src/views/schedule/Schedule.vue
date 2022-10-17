<script>
import axios from "axios";
export default {
  setup() {
    
    const apple = () => {
      console.log("点击了button");
      axios.get("/api/schedule").then((res) => {
      console.log(res);
      });
    };
    const apple2 = () => {
      console.log("点击了button2");
      axios.get("/api/favorite").then((res) => {
      console.log(res);
      });
    };

    return { apple ,apple2};
  },
};
</script>

<template>
  <div class="schedule">Schedule</div>
  <button @click="apple()">click</button>
  <button @click="apple2()">click2</button>

</template>

<style scoped></style>
