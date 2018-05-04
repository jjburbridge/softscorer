<template>
  <div class="card-image">
    <div class="image-card__comment mdl-card__actions">
        <span>{{ this.batter.name }}</span>
        <span>{{ this.batter.position }}</span>
        <span>{{ this.batter.lineup }}</span>
        <span>{{ this.batter.gender }}</span>

    </div>
  </div>
</template>
<script>
import batters from '../data'
export default {
  data () {
    return {
      'batter': batters.batters[this.$route.params.id]
    }
  }
}
</script>
<style scoped>
</style>