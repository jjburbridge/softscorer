<template>
    <div class="scoreboard">
      <div v-for="batter in this.batters" v-bind:key=batter.index class="image-card" @click="batterDetails(batter.id)">
          <div class="image-card__picture">
            <p>{{ batter.name }}</p>
          </div>
      </div>
    </div>
</template>


<script>
import batters from '../data'
export default {
  methods: {
    batterDetails (id) {
      this.$router.push({name: 'batter', params: {id: id}})
    }
  },
  data () {
    return {
      'batters': batters.batters
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