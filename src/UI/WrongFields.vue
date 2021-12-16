<template>
  <div class="wrong">
    <h1>Fields must be field</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WrongFields',
});
</script>

<style lang="scss" scoped>
.wrong {
  position: absolute;
  color: red;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  h1 {
    background-color: #fff;
    padding: 10px;
  }
}
</style>
