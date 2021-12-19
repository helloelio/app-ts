<template>
  <h2 class="title">Socials <span class="blinked">_</span></h2>
  <div class="socials">
    <SocialsItems :socials="socials" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialsItems from '@/components/socials/SocialsItem.vue';

export default defineComponent({
  name: 'SocialsMain',
  components: {
    SocialsItems,
  },

  setup() {
    const socials = [
      {
        id: 1,
        img: require('@/assets/images/instagram-social.svg'),
        alt: 'instagram logo',
        username: '@madve.dev',
        url: 'https://www.instagram.com/madve.dev/',
      },
      {
        id: 2,
        img: require('@/assets/images/github-social.svg'),
        alt: 'github logo',
        username: '@helloelio',
        url: 'https://github.com/helloelio',
      },
    ];
    return { socials };
  },
});
</script>

<style lang="scss" scoped>
.socials {
  display: grid;
  row-gap: 20px;
}
</style>
