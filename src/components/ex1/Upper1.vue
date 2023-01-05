<template>

  <h1>Upper1 Component </h1>

  <button @click = "handleClickUpper1">UPPER1</button>

  <Sub1Component></Sub1Component>

</template>

<script setup>

import Sub1Component from "@/components/ex1/Sub1Component.vue";
import {provide} from "vue";

const handleClickUpper1 = () => {

  console.log('upper1')
}

provide("upper1", handleClickUpper1)

</script>

<style scoped>

</style>