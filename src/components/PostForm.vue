<template>
    <div class="container">
        <form @submit.prevent>
            <div class="row mb-5">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="card shadow">
                        <div class="card-body bg-primary">
                            <input v-model="post.title" type="text" class="form-control mb-4"
                                placeholder="Enter title of post" required>
                            <input v-model="post.body" type="text" class="form-control mb-4"
                                placeholder="Enter body of post" required>
                            <button class="btn btn-danger mb-2" @click="createPost">Add the post</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'PostForm',

    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                    title: '',
                    body:  ''
                }
        }
    }

}
</script>

<style>
</style>