<template>
  <div class="container">
        <h1 class="mb-4 mt-4" >likes {{$store.state.likes}}</h1>
    <button class="btn btn-success me-3" @click="$store.commit('plus')">Add</button>
    <button class="btn btn-danger m" @click="$store.commit('minus')">Divorce</button>
  </div>
</template>

<script>
export default {
data(){
  return {
     posts: [
        { id: 1, title: 'JavaScript', body: 'body of the title' },
        { id: 2, title: 'JavaScript 2', body: 'body of the title 2' },
        { id: 3, title: 'JavaScript 3', body: 'body of the title 3' },
        { id: 4, title: 'JavaScript 4', body: 'body of the title 4' }
      ],

      title: '',
      body: '',
  }
},
methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
        this.title = '',
        this.body = ''
    }
  },

}
</script>

<style>

</style>