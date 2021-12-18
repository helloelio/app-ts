<template>
  <a :href="social.url" v-for="social in socials" :key="social.id">
    <div class="socials__item">
      <div class="socials__image">
        <img :src="social.img" :alt="social.alt" />
      </div>
      <div class="socials__nickname">{{ social.username }}</div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocilasItem',
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

a {
  display: block;
}
.socials__item {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  align-items: center;
  font-size: 2rem;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid white;
  transition: all 0.3s ease;
}
.socials__item:hover {
  border: 1px solid white;
  box-shadow: 0 0 5px 0 black;
  transform: scale(1.01);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(235, 171, 205, 1) 100%
  );
}

.socials__nickname {
  text-decoration: underline;
}
.socials__image {
  display: flex;
  border-radius: 20px;
}
.socials__image img {
  max-height: 50px;
}
</style>
