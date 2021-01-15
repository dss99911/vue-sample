<template>
  <!--  computed properties are cached based on their reactive dependencies-->
  <!--  so, it's different with method-->
  <div>
    <span>{{ publishedBooksMessage }}</span>
    <input v-model="fullName"/>
    <p>First Name : {{ firstName }}</p>
    <p>Last Name : {{ lastName }}</p>
    <p>
      Ask a yes/no question:
      <input v-model="question"/>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>

export default {
  name: "Computed",
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: "Hyun",
      lastName: "Kim",
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion/*, oldQuestion*/) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer() {
      this.answer = 'Thinking...'
      this.$axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
    }
  }
}
</script>

<style scoped>

</style>