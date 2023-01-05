<template>
  <h3>Sub2 Component</h3>

  <button @click="handleUpperClick">Sub2</button>

</template>

<script setup>

import {inject} from "vue";

const handleUpperClick = inject("upper1")





</script>

<style scoped>

</style>