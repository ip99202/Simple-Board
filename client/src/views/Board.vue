<template>
  <v-card class="board" tile>
    <v-list>
      <v-subheader>게시판 목록</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="(board, i) in boards" :key="i" v-text="board.title" @click="read(board._id)">
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
  data() {
    return {
      boards: [],
    }
  },
  methods: {
    read(board_id) {
      this.$router.push({
        path: '/board/' + board_id        
      })
    }
  },
  mounted() {
      axios.get("/api/boards").then(res => {
        this.boards = res.data
      });
    }
};
</script>