<template>
  <a :href="work.link" v-for="work in this.works" :key="work.id">
    <div class="works__item">
      <div class="works__image">
        <img :src="work.img" alt="" />
      </div>
      <div class="works__content">
        <div class="works__title">{{ work.title }}</div>
        <div class="works__subtitle">
          {{ work.subtitle }}
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WorkItem',
  props: {
    works: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
.works__item {
  .works__image {
    display: flex;
    justify-content: center;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
  .works__title {
    font-size: 2rem;
    text-align: center;
  }
  .works__content {
    .works__subtitle {
      text-align: center;
    }
  }
}
</style>
