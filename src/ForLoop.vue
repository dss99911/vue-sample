<template v-for="n in 1" :key="n">
  <!--  https://v3.vuejs.org/guide/list.html#mapping-an-array-to-elements-with-v-for-->
  <div>
    <ul>
      <li v-for="item in list" v-bind:key="item">{{ item }}</li>
    </ul>

    <!--    with index-->
    <ul id="array-with-index">
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <!--    in object-->
    <ul>
      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
    </ul>

    <!--    object key(optional), value, index(optional)-->
    <li v-for="(value, name, index) in myObject" :key="name">
      {{ name }}: {{ value }} : {{ index }}
    </li>

    <!--    with range-->
    <span v-for="n in 10" :key="n">{{ n }} </span>
  </div>


</template>
<script>
export default {
  name: 'ForLoop',
  data() {
    return {
      list: ["a", "b", "c"],
      parentMessage: 'Parent',
      items: [{message: 'Foo'}, {message: 'Bar'}],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
</script>