<template>
  <h1> {{countObj.num}}</h1>



  <button @click="() => handleClickInc(1)"  >INC</button>
  <button @click="() => handleClickInc(-1)"  >DEC</button>
</template>

<script setup>

import {computed, ref} from "vue";
import useCount from "@/components/useCount";

const {countObj, inc} = useCount()

const handleClickInc = (amount) => {
  inc(amount)
}

const str = computed(() => {
  console.log("computed...")
  return countObj.value.num %2 === 0 ?'EVEN':'ODD'
} )

  </script>

<style scoped>

</style>