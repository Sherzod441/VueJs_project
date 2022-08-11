<template>
    <div class="container">
       <div class="post mb-5" >
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-primary">Post <strong>{{ post.id }}</strong></div>
                            <div class="card-body ">
                                <h1>{{ post.title }}</h1>
                                <h5>{{ post.body }}</h5>
                                <button class="btn btn-success mt-3">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
            </div>
    </div>
</template>

<script>
export default {
props:{
    post: {
        type: Object,
        required: true
    }
}
}
</script>

<style>

</style>