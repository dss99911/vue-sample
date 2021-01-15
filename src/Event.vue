<template>
  <!--  https://v3.vuejs.org/guide/events.html#listening-to-events-->
  <!--  custom event : https://v3.vuejs.org/guide/component-custom-events.html#event-names-->
  <div>
    <p>counter : {{ counter }}</p>
    <button @click="counter += 1">Add 1</button>

    <button v-on:click="reverseMessage">Reverse Message</button>
    <br/>
    <button @click="debouncedClick">Reverse Message Debounce</button>
    <p>{{ message }}</p>
  </div>

</template>
<script>
export default {
  name: 'Event',
  data() {
    return {
      message: 'Hello Vue.js!',
      counter: 0
    }
  },
  created() {
    // Debouncing with Lodash
    this.debouncedClick = this.$_.debounce(this.reverseMessage, 1000)
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  destroyed() {
    // Cancel the timer when the component is removed
    this.debouncedClick.cancel()
  },
  methods: {
    reverseMessage() {
      console.log(this.message)
      this.message = this.message
          .split('')
          .reverse()
          .join('')
    }
  }
}
</script>