<template>
    <div class="container">
        <PostItem  class="post mb-5" v-for="post in posts" :post="post" :key="post.id" @click="$emit('remove', post)" />
        
    </div>
</template>



<script>

import PostItem from '@/components/PostItem.vue'

export default {
    components:{ PostItem },
    name: 'PostList',
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
</style>