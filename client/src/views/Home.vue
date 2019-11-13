<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <table border="1">
      <tr v-for="(i,index) in listdata" :key="index">
        <td>{{ i.name }}</td>
        <td>{{ i.grade }}</td>
        <td>{{ i.etc }}</td>
      </tr>
    </table>

    <div v-if="ischecked == true">
      <p>{{ hello }}</p>
      <input v-model="hello" />
      <button v-bind:click="gogogo">gogo</button>
    </div>

    <div>
      <input type="checkbox" v-model="ischecked" />check this!
    </div>
    <p>{{ischecked}}</p>
    <div>
      <a :href="'http://' + hello">Go to {{ hello }}</a>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "home",
  data() {
    return {
      hello: "hihi",
      ischecked: true,
      listdata: [
        { name: "한장희", grade: 2, etc: "Vue 공부중" },
        { name: "박건영", grade: 2, etc: "Vue 공부중?" }
      ]
    };
  },
  methods: {
    gogogo() {
      alert(this.hello);
    }
  }
};
</script>
