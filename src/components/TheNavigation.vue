<template>
  <div id="nav">
    <div class="nav__items">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
    </div>
    <LogoutButton @logout="this.$emit('logout')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoutButton from '@/UI/LogouotButton.vue';

export default defineComponent({
  name: 'TheNavigation',
  components: {
    LogoutButton,
  },
});
</script>

<style lang="scss" scoped>
#nav {
  background-color: #202023d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px;
  border-bottom: 2px solid #000;
  a {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      text-shadow: 0px 0px 5px;
    }
    &.router-link-exact-active {
      border-bottom: 2px solid #fff;
    }
    &.router-link-exact-active:hover {
      border-bottom: 2px solid #fff;
      text-shadow: none;
    }
  }
}
</style>
