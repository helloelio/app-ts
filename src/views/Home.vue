<template>
  <section class="home">
    <HomeHeader />
    <HomeMain />
    <SocialsMain />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeMain from '@/components/home/HomeMain.vue';
import SocialsMain from '@/components/socials/SocialsMain.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
    SocialsMain,
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
