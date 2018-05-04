<template>
    <div>
        <p>You Struck Out!!</p>
    </div>
</template>


<script>
export default {
  data () {
    return {
      strikes: 0,
      balls: 0
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