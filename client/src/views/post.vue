<template>
    <v-card tile>
      <v-row>
        <v-col class="d-flex flex-row-reverse">
          <v-btn :to="'/write/'+curid">write</v-btn>
        </v-col>
      </v-row>
    <v-list>
      <v-subheader>{{ curid }}</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="post in posts" :key="post._id" @click="go(post._id, post.board)">
            <v-list-item-content>
                <v-list-item-title>{{post.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<style scoped>

</style>
<script>
import axios from "axios";
export default {
    name : 'post',
    computed: {
        curid() {
            return this.$route.params.board_id
        }
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
    go(post_id, board) {
      this.$router.push({
        path: '/posts/' + post_id + '/' + board
      }),
      console.log(post_id)
    }
  },
    mounted() {
      axios.get("/api/boards/" + this.$route.params.board_id).then(res => {
        this.posts = res.data.posts;
        console.log(res.data)
      });
    }
}
</script>