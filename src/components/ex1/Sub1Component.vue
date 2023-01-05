<template>
  <h2>Sub1 Component </h2>

  <Sub2Component></Sub2Component>

</template>

<script>
import Sub2Component from "@/components/ex1/Sub2Component.vue";

export default {
  name: "Sub1Component",
  components: {Sub2Component}
}
</script>

<style scoped>

</style>