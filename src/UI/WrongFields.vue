<template>
  <div class="wrong" :class="{ shown: validate }">
    <h1>Fields must be field</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WrongFields',

  props: {
    validate: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrong {
  position: absolute;
  color: red;
  top: -500px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  transition: all 0.3s ease-out;
  opacity: 0;
  h1 {
    background-color: #fff;
    padding: 10px;
  }
}
.shown {
  top: 10%;
  animation: wrong 4s;
}

@keyframes wrong {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .wrong {
    width: 100%;
  }
  h1 {
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
