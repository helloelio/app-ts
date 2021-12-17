<template>
  <div id="nav">
    <div class="nav__items">
      <router-link class="logo-text" to="/"
        ><span class="hello-emoji">👋</span>helloelio</router-link
      >
      <div class="nav__items nav__items-additionaly">
        <router-link to="/works">Works</router-link>
        <a href="https://github.com/helloelio"
          ><img
            src="@/assets/images/github.svg"
            target="_blank"
            alt="github-logo"
          />
          Github</a
        >
      </div>
    </div>
    <div style="display: flex">
      <div class="nav__items-burger">
        <HamburgerMenu />
      </div>
      <LogoutButton @logout="this.$emit('logout')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoutButton from '@/UI/LogouotButton.vue';
import HamburgerMenu from '@/components/navigation/HamburgerMenu.vue';

export default defineComponent({
  name: 'TheNavigation',
  components: {
    LogoutButton,
    HamburgerMenu,
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
  padding: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  .nav__items {
    display: flex;
    .logo-text {
      font-family: 'Press Start 2P', cursive;
      font-weight: 400;
    }
  }
  .nav__items-burger {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
    .hello-emoji {
      transition: all 0.2s ease-in-out;
      margin-right: 5px;
    }
    &:hover {
      box-shadow: 0px 0px 5px white;
    }
    &:hover > span.hello-emoji {
      animation: hello 1s;
    }
    &.router-link-exact-active {
      border-bottom: 2px solid #fff;
    }
    &.router-link-exact-active:hover {
      border-bottom: 2px solid #fff;
      box-shadow: none;
    }
    img {
      margin-right: 5px;
    }
  }
}

@keyframes hello {
  0% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0);
  }
}

@media (max-width: 600px) {
  #nav {
    justify-content: space-between;
    a {
      font-size: 1rem;
    }
  }
  .nav__items-additionaly {
    display: none !important;
  }
  .nav__items-burger {
    display: flex !important;
  }
}
</style>
