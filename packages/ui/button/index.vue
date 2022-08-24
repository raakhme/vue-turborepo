<script setup>
import { ref } from "vue";

const count = ref(0);
const myref = ref(null);
console.log(myref);
</script>

<template>
  <button ref="myref" @click="count++">
    You clicked me {{ count }} times 111212 dsdsdsdsds sddsd sd
  </button>
</template>
