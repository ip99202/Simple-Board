<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <h2>Board Page</h2>
        </v-row>
        <v-row>
          <p>{{ fetcheddata }}</p>
          <v-btn @click="onclick">Fetch!</v-btn>
        </v-row>

        <v-row justify="center">
          <v-col>
            <v-card class="pa-4">
              <input v-model="hello" placeholder="input board id" />
              <button v-on:click="goto">go to board</button>
              <p>{{hello}}</p>
              <p>{{getdata}}</p>
              <v-simple-table>
                <tbody>
                  <tr v-for="(i, index) in postlist" :key="index">
                    <td>{{i.title}}</td>
                    <td>{{i.content}}</td>
                    <td>{{i.author}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
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
      hello: "",
      fetcheddata: {},
      getdata: {},
      postlist: []
    };
  },
  methods: {
    onclick() {
      axios
        .get("/api/boards")
        .then(res => {
          //this.fetcheddata = res.data.map((item) => {return item._id})
          this.fetcheddata = res.data;
        })
        .catch(err => {
          console.log("error!");
          console.log(err);
        });
    },
    goto() {
      axios
        .get("/api/boards/" + this.hello)
        .then(res => {
          this.getdata = res.data.posts;
          this.postlist = res.data.posts;
        })
        .catch(err => {
          console.log("error");
          console.log(err);
        });
    }
  }
};
</script>