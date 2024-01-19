<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';

let postits = ref([]);
const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
}

onMounted(async () => {
  const res = await fetch ('http://mattmcm.fr:7754/notes')
  const data = await res.json();
  postits = data.notes;
  forceRerender();
})

</script>
<template>
<div class="home z-3 position-absolute">
    <h1> Home - List of postits</h1>

  <a href="/addpostit"><button class="btn btn-warning mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus-circle p-1" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Add a postit</button></a>


  <div class="row" :key="componentKey">
    <div v-for="postit in postits" :key="postit.id" class="col-sm-5 col-xl-3">
        <div class="card shadow rounded mb-5">
              <div class="card-body" v-bind:style="{backgroundColor: postit.color}">
                <h5 class="card-title">{{ postit.title }}</h5>
                <p class="card-text">{{ postit.content }}</p>
                <router-link :to="'/note/'+postit._id" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle p-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>See details</router-link>
              </div>
          </div>
      </div>
  </div>
</div>

</template>