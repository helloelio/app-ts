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
  background-color: rgba(57, 169, 239, 0.9);
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid #000;
  a {
    background-color: #184968;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 4px;
    padding: 5px 10px;
    border: 2px solid #184968;
    text-decoration: none;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      border: 2px solid #fff;
    }
    &.router-link-exact-active {
      background-color: #fff;
      color: #184968;
    }
    &.router-link-exact-active:hover {
      border: 2px solid #39a8ef;
    }
  }
}
</style>
