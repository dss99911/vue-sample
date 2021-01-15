<template>
<!--  title : show description on hover-->
  <p v-bind:title="hover">Test hover</p>
</template>
<script>
export default {
  name: 'UI',
  data() {
    return {
      hover: "this is title"
    }
  }
}
</script>