<template>
    <div class="scoreboard">
      <div v-for="batter in batters" v-bind:key=batter.index class="image-card" @click="batterDetails(batter.id)">
          <div class="image-card__picture">
            <p>{{ batter.name }}</p>
          </div>
      </div>
      <add-batter></add-batter>
    </div>
</template>


<script>
import AddBatter from './AddBatter'
import Vue from 'vue'
Vue.component('add-batter', AddBatter)
export default {
  computed: {
    batters: function () {
      return this.$store.getters.batters
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