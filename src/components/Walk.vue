<template>
    <div>
        <p>You Drew A Walk!</p>
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