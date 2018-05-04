<template>
    <div class="scoreboard"><p>A Scoring thing here</p>
        <button v-on:click="strikes += 1">Strike</button>
        <button v-on:click="balls += 1">Ball</button>
        <div>Hit</div>
        <p>The current count is {{balls}} balls, {{strikes}} strikes</p>
    </div>
    
</template>


<script>
export default {
  data () {
    return {
      strikes: 0,
      balls: 0
    }
  },
  watch: {
    strikes: function (val) {
      if (val >= 3) {
        this.$router.push({name: 'strike-out', params: {id: 1}})
      }
    },
    balls: function (val) {
      if (val >= 4) {
        this.$router.push({name: 'walk', params: {id: 1}})
      }
    }
  }
}
</script>

<style scoped>
  .scoreboard {
    padding: 10px;
    color: #555;
  }
</style>