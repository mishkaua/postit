<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import { ref } from 'vue';
//import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
    <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <div class="container">
      <router-view></router-view>
  </div>

</template>
