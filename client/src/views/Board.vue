<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col class="d-flex flex-row-reverse">
            <v-btn :to="'/makeBoard/'">MakeBoard</v-btn>
          </v-col>
        </v-row>
        <v-card class="board" tile>
          <v-list>
            <v-subheader>게시판 목록</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(board, i) in boards"
                :key="i"
                v-text="board.title"
                @click="read(board._id, board.title)"
              ></v-list-item>
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
  data() {
    return {
      boards: []
    };
  },
  methods: {
    makeBoard() {

    },
    read(board_id, board_title) {
      this.$router.push({
        path: "/board/" + board_id + "/" + board_title
      });
    }
  },
  mounted() {
    axios.get("/api/boards").then(res => {
      this.boards = res.data;
    });
  }
};
</script>