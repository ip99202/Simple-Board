<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="title" placeholder="게시판 이름"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-row-reverse">
          <v-btn @click="makeBoard">MakeBoard</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    makeBoard() {
      axios.post(`/api/boards/`, {
        title: this.title
      })
      .then((res) => {
          this.$router.push({
              path: `/board/`
          })
      })
      .catch((err) => {
          console.log(err)
      })
    }
  }
};
</script>