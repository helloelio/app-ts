<template>
  <main>
    <section class="works">
      <WorkMain />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import WorkMain from '@/components/work/WorkMain.vue';

export default defineComponent({
  name: 'Works',
  components: {
    WorkMain,
  },

  setup() {
    onMounted(() => {
      document.title = 'helloelio - Works';
    });
  },
});
</script>

<style lang="scss" scoped>
.works {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
