<template>
  <div>
<!--    https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes -->
<!--    result is <div class="static active"></div>, as hasError is false-->
    <div
        class="static"
        :class="{ active: isActive, 'text-danger': hasError }"
    ></div>

    <div :class="classObject"></div>


<!--    result : <div class="active text-danger"></div> -->
    <div :class="[activeClass, errorClass]"></div>

    <div :class="[isActive ? activeClass : '', errorClass]"></div>

<!--    Style -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <div :style="styleObject"></div>
    <div :style="[styleObject, styleObject]"></div>


  </div>
</template>

<script>
export default {
  name: "Syntex",
  data() {
    return {
      isActive: true,
      hasError: false,
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>

<style scoped>

</style>