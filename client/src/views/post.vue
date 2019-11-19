<template>
  <v-app>
    <v-content>
      <v-container>
        <h2 class="title">{{ this.$route.params.board_title }}</h2>
        <v-row>
          <v-col>
            <v-btn @click="deleteBoard">delete</v-btn>
          </v-col>
          <v-col class="d-flex flex-row-reverse">
            <v-btn :to="'/write/'+curid+'/'+this.$route.params.board_title">write</v-btn>
          </v-col>
        </v-row>
        <v-card tile>
          <v-list>
            <v-subheader>글 목록</v-subheader>
            <v-list-item-group>
              <v-list-item v-for="post in posts" :key="post._id" @click="go(post._id, post.board)">
                <v-list-item-content>
                  <v-list-item-title>{{post.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
</style>
<script>
import axios from "axios";
export default {
  name: "post",
  computed: {
    curid() {
      return this.$route.params.board_id;
    }
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    deleteBoard() {
      axios.delete(`/api/boards/${this.$route.params.board_id}`)
      .then(res => {
        this.$router.push({
          path: `/board/`
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    go(post_id, board) {
      this.$router.push({
        path:
          "/posts/" +
          board +
          "/" +
          this.$route.params.board_title +
          "/" +
          post_id
      }),
        console.log(post_id);
    }
  },
  mounted() {
    axios.get("/api/boards/" + this.$route.params.board_id).then(res => {
      this.posts = res.data.posts;
      console.log(res.data);
    });
  }
};
</script>