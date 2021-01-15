<template>
  <!--  https://v3.vuejs.org/guide/component-slots.html#named-slots-->
  <div>
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slot"
}
</script>

<style scoped>

</style>