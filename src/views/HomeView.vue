<template>
  <main>
    <h1>welcome  home</h1>
    <h2>{{ message }}</h2>
    <button type="button" @click="fetchRender">fetch</button>
  </main>
</template>
<script setup>
import { ref } from 'vue'
const message = ref("");
const url = "https://test-rtc.onrender.com";


  async function fetchRender(){
    try {
      const response  = await fetch(url);
      const data = await response.json();
      message.value = data.message;
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };
</script>
