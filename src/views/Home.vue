<template>
  <main>
    <section class="home">
      <HomeHeader />
      <HomeMain />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeMain from '@/components/home/HomeMain.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
  },
  setup() {
    onMounted(() => {
      document.title = 'helloelio - Home';
    });
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
