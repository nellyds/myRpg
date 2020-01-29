<template>
  <div class="home">
    <TypeWriter></TypeWriter>
  </div>
</template>

<script>
import TypeWriter from "@/components/TypeWriter.vue";

export default {
  name: "home",
  components: {
    TypeWriter
  }
};
</script>
<style scoped>
    body{
        color: white;
        font-family: 'reactor';
        background-color: black;
    }
</style>
