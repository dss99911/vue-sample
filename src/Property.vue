<template>
  <!--  https://v3.vuejs.org/guide/component-props.html#prop-validation-->
  <h3>Hello {{ msg }}!</h3>
</template>
<script>
export default {
  name: 'Property',
  props: {
    msg: String
  }
}
</script>