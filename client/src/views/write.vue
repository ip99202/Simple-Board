<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
            <v-text-field v-model="title" placeholder="제목"></v-text-field>
            <v-text-field v-model="author" placeholder="작성자"></v-text-field>
            <v-textarea v-model="content" placeholder="내용"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col class="d-flex flex-row-reverse">
              <v-btn @click="writeClick">Write</v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title: "",
            content: "",
            author: ""
        }
    },
    method: {
        writeClick() {
            axios.post("/api/boards/board_id", {
                title: this.title,
                content: this.content,
                author: this.author
            })
            .then((res) => {
                this.$router.push('')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
};
</script>