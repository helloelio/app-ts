<template>
  <section class="home">
    <HomeHeader />
    <HomeMain />
    <SocialsMain />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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

  mounted() {
    document.title = 'helloelio - home';
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
