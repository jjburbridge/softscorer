<template class="add-batter">
    <div class="add-batter">
      <h1>Add A Batter</h1>
      <label>ID</label>
      <input v-model="batter.id" placeholder="edit me">
      <p>Will become {{ batterID }}</p>
      <br>
      <label>Name</label>
      <input v-model="batter.name" placeholder="edit me">
      <br>
      <label>Position</label>
      <select v-model="batter.position">
        <option v-for="position in positions" :key="position.value" v-bind:value="position.name">
          {{ position.name }}
        </option>
      </select>
      <br>
      <label>Order in Lineup</label>
      <select v-model="batter.lineup">
        <option v-for="order in _.range(12)" :key="order" v-bind:value="order+1">
          {{ order +1 }}
        </option>
      </select>
      <br>
      <input type="radio" id="male" value="male" v-model="batter.gender">
      <label for="male">Male</label>
      <br>
      <input type="radio" id="female" value="female" v-model="batter.gender">
      <label for="female">Female</label>
    </div>
</template>

<script>
export default {
  computed: {
    batterID () {
      return this.batter.id || this.$store.getters.nextID
    }
  },
  data () {
    return {
      'batter': {
        id: 0,
        name: null,
        position: null,
        lineup: null,
        gender: null
      },
      'positions': [
        {
          id: '1',
          name: 'Pitcher'
        },
        {
          id: '2',
          name: 'Catcher'
        },
        {
          id: '3',
          name: '1st Base'
        },
        {
          id: '4',
          name: '2nd Base'
        },
        {
          id: '5',
          name: '3rd Base'
        },
        {
          id: '6',
          name: 'Short Stop'
        },
        {
          id: '7',
          name: 'Left Field'
        },
        {
          id: '8',
          name: 'Left Centre Field'
        },
        {
          id: '9',
          name: 'Right Centre Field'
        },
        {
          id: '10',
          name: 'Right Field'
        },
        {
          id: '11',
          name: 'Extra Hitter'
        }
      ]
    }
  }
}
</script>