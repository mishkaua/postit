<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
    data() {
        return {
            postitTitle: null,
            postitContent: null,
            postit: { title: '', content: '' }
        }
    },
    methods: {
//data validation
validTitle(title) {
  let validTitlePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validTitlePattern.test(title)){
    return true;
  }
  return false;
},

validContent(content) {
  let validContentPattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validContentPattern.test(content)){
    return true;
  }
  return false;
},

async addPostit(){
    if(this.validTitle() && this.validContent()){
    const response = await fetch("http://mattmcm.fr:7754/notes", {
                method: "POST",
                body: JSON.stringify({
                    title: this.postitTitle,
                    content: [this.postitContent]
                }),
                headers: {
                    "Content-Type" : "application/json",
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
        } else {
            console.log("Invalid data format")
    }
    window.location.href = "/"
}
    }
}

</script>

<template>
    <div class="card shadow rounded col-sm-10" id="postit">
    <form v-on:submit.prevent="addPostit">
        <div class="m-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="postitTitle" aria-describedby="postit title" maxlength="50" required>
        </div>
        <div class="m-3">
            <label for="content" class="form-label">Content</label>
            <input type="text" class="form-control" v-model="postitContent" aria-describedby="postit content" required>
        </div>
        <button type="submit" class="btn btn-primary m-3">Save note</button>
    </form>
    </div>
</template>