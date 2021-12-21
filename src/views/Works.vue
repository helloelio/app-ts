<template>
  <section class="works">
    <WorkMain />
  </section>
  <SocialsMain />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import WorkMain from '@/components/work/WorkMain.vue';
import SocialsMain from '@/components/socials/SocialsMain.vue';

export default defineComponent({
  name: 'Works',
  components: {
    WorkMain,
    SocialsMain,
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
