<template>
  <div class="home">
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
      ischecked: true
    };
  },
  methods: {
    gogogo() {
      alert(this.hello);
    }
  }
};
</script>
