<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col class="d-flex flex-row-reverse">
            <v-btn @click="deleteClick">delete</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card v-if="!iserror" :loading="loading_swc">
              <v-card-title>{{post.title}}</v-card-title>
              <v-card-subtitle>작성자: {{post.author}}</v-card-subtitle>
              <v-card outlined>
              <v-card-text>{{post.content}}</v-card-text>
              </v-card>
            </v-card>
            <v-card v-else>
              <v-card-text>게시글이 없습니다.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
</style>

<script>
import axios from "axios";

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
    };
  },
  mounted() {
    axios
      .get("/api/posts/" + this.$route.params.post_id)
      .then(res => {
        this.post = res.data;
        this.loading_swc = false;
        console.log(res.data);
      })
      .catch(err => {
        this.iserror = true;
        console.log(err);
      });
  },
  methods: {
    deleteClick() {
      axios
        .delete(`/api/posts/${this.$route.params.post_id}`)
        .then(res => {
          this.$router.push({
            path: `/board/${this.$route.params.board_id}`
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>