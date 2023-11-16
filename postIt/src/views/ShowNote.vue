<script>
//need to import data from the postits array (data.notes)
//import postits from 'HomeView'
import axios from "axios"

import { reactive, computed } from 'vue'
    export default {
        data() {
            return {
                postit: {
                    title: "",
                    content: [],
                }
            }
        },
        computed:{
            noteId(){
                return this.$route.params.id
            },
            note(){
                return postits.find(postit => postit._id === this.noteId)
            }
        },
        mounted: async function () {
            const res = await fetch (`http://mattmcm.fr:7754/notes/${this.noteId}`)
            const data = await res.json();
            this.postit = data.note;
        },
        methods: {
            async deletePostit(){
                axios.delete(`http://mattmcm.fr:7754/notes/${this.noteId}`)
                .then(response => {
                    console.log("Postit sucessfully deleted", response);
                })
                .catch(function(error){
                    console.log(error.response)
                })
                window.location.href = "/"
        }
    }
}
</script>

<template>

<div class="container">
    <h1>Hello my favourite note number {{ $route.params.id }}</h1>
        <div class="note">
            <div class="container">
                <div class="col-sm-6" id="postit">
                    <div class="card shadow rounded">
                        <div class="card-body mb-2">
                            <label for="id" class="form-label">Id</label>
                            <p class="card-title form-control"> {{ this.postit._id }}</p>
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="card-title form-control" v-bind:placeholder="this.postit.title">
                            <label for="content" class="form-label">Content</label>
                            <textarea class="card-title form-control" rows="3">{{ this.postit.content }}</textarea>
                            <a href="/" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="22"
                                    height="22" fill="currentColor" class="bi bi-arrow-left-circle p-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                </svg>Back to postit list</a>
                        </div>
                        <div class="card-footer">
                            <router-link to="" class="btn btn-success mx-3">Edit</router-link>
                            <router-link to="" class="btn btn-danger" @click.prevent="deletePostit">Delete</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>