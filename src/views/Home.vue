<template>
  <div class="home">
    <HomeHeader />
    <HomeMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeMain from '@/components/home/HomeMain.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
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
