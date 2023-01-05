<template>

  <div>
    <input type="text" v-model="word">
    <button @click="handleClickAdd">ADD</button>
  </div>
  <div>
    <ul>
      <li v-for="word in arr" :key="word.seq">
        {{word.seq}} ------ {{word.str}}<button @click="() => handleClickDel(word.seq)" >DEL</button>
      </li>
    </ul>
  </div>
</template>

<script setup>

import {ref} from "vue";

const seq = ref(5)
const word = ref('ABC')

const arr = ref([
  {seq:1, str:'AAA'},
  {seq:2, str:'BBB'},
  {seq:3, str:'CCC'},
  {seq:4, str:'DDD'},
  {seq:5, str:'EEE'},
])

const handleClickDel = (seq) => {

  console.log(seq)

  const result = arr.value.filter(ele => ele.seq !== seq)

  console.log(result)

  arr.value = result
}

const handleClickAdd = () => {
  console.log(word.value)
  //const str = word.value
  arr.value.push( {seq: ++seq.value , str: word.value})
  word.value =''
}

</script>

<style scoped>

</style>