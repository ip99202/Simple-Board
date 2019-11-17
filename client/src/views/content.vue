<template>
    <v-container>
        <r-row>
            <v-col>
                <v-card v-if="!iserror" :loading="loading_swc">
                    <v-card-title>{{post.title}}</v-card-title>
                    <v-card-subtitle>{{post.author}}</v-card-subtitle>
                    <v-card-content>{{post.content}}</v-card-content>
                </v-card>
                <v-card v-else>
                    <v-card-content>
                        게시글이 없습니다.
                    </v-card-content>
                </v-card>
            </v-col>
        </r-row>
    </v-container>
</template>

<style scoped>
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: {
                title: "",
                content: "",
                author: ""
            },
            iserror: false,
            loading_swc: true
        }
    },
    mounted() {
        axios.get("/api/posts/" + this.$route.params.post_id)
        .then((res) => {
            this.post = res.data
            this.loading_swc = false
            console.log(res.data)
        })
        .catch((err) => {
            this.iserror = true
            console.log(err)
        })
    }
}
</script>