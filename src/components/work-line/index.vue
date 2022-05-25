<script setup lang="ts">
import Node from "./components/node.vue";

</script>

<template>
  <div>hello, work line</div>
  <div v-for="(item, index) in 20">
    <Node :msg="'test' + item" />
  </div>

</template>

<style scoped lang="css" > 
</style>