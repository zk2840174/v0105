<template>
  <h2>Count Display Component</h2>

  <h2>{{props.count.num}}</h2>
  <h2>{{num}}</h2>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps(['count'])

console.log(props)

const num = computed(() => props.count.num)

</script>

<style scoped>

</style>