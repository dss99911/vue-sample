<template>
  <!--  https://v3.vuejs.org/guide/forms.html#basic-usage-->
  <div>
    <input v-model="message"/>
    <p>{{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <!--    radio-->
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>


</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      message: 'Hello Vue.js!',
      checked: true,
      picked: '',
      selected: ''
    }
  },
}
</script>