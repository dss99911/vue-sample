<template v-if="isTrue">
  <p v-if="isTrue">is True!</p>
  <p v-else-if="number > 5">over than 5</p>
  <p v-else>Else</p>

  <p v-show="isTrue">show</p>
</template>
<script>
export default {
  name: 'IfElse',
  data() {
    return {
      isTrue: true,
      number: 10,
    }
  }
}
</script>