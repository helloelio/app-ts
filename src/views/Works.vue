<template>
  <div class="works">
    <WorkMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkMain from '@/components/work/WorkMain.vue';

export default defineComponent({
  name: 'Works',
  components: {
    WorkMain,
  },

  mounted() {
    document.title = 'helloelio - works';
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
