<template>
  <div class="board">
    <div>
      Board page!
      <p>{{ fetcheddata }}</p>
      <button @click="onclick">Fetch!</button>
    </div>

    <div>
        <p><input v-model="hello" placeholder="input board id"/></p>
        <button v-on:click="goto">go to board</button>
        <P>{{hello}}</p>
        <p>{{getdata}}</p>
        <table border="0" align-center:true>
            <tr v-for="(i, index) in postlist" :key="index">
                <td>{{i.title}}</td>
                <td>{{i.content}}</td>
                <td>{{i.author}}</td>
            </tr>
        </table>
    </div>
  </div>
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
          this.fetcheddata = res.data;
        })
        .catch(err => {
          console.log("error!");
          console.log(err);
        });
    },
    goto() {
          axios
          .get('/api/boards/' + this.hello)
          .then(res=> {
              this.getdata = res.data.posts;
              this.postlist= res.data.posts;
          })
          .catch(err => {
              console.log("error");
              console.log(err);
          })
      }
  }
};
</script>