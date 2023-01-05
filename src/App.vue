<script setup>
import MyHelloWorld from "@/components/MyHelloWorld.vue";
import CountComponent from "@/components/CountComponent.vue";
import CountWrapper from "@/components/count/CountWrapper.vue";
import MemoPad1 from "@/components/memo/MemoPad1.vue";
import Upper1 from "@/components/ex1/Upper1.vue";
</script>

<template>

  <div>
    <Upper1></Upper1>
  </div>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
