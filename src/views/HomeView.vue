<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostForm @create="createPost" />
    <PostList @remove="removePost" :posts="posts"  />

  </div>
</template>

<script>
// @ is an alias to /src

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';


export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'body of the title' },
        { id: 2, title: 'JavaScript 2', body: 'body of the title 2' },
        { id: 3, title: 'JavaScript 3', body: 'body of the title 3' },
        { id: 4, title: 'JavaScript 4', body: 'body of the title 4' }
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  },
  name: 'HomeView',
  components: {
    PostForm,
    PostList
}
}
</script>
