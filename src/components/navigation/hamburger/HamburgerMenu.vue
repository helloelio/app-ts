<template>
  <div class="nav__items-burger">
    <button
      @click="toggleBurger = !toggleBurger"
      :class="{ 'active-hamburger': toggleBurger }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 18H1V16H21V18ZM21 13H3V11H61V13ZM21 8H1V6H21V8Z"
          fill="white"
        />
      </svg>
    </button>
    <div v-show="toggleBurger" class="hamburger-links">
      <router-link @click="toggleBurger = !toggleBurger" to="/works"
        >Works</router-link
      >
      <a
        @click="toggleBurger = !toggleBurger"
        href="https://github.com/helloelio"
      >
        Github</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HamburgerMenu',
  data() {
    return {
      toggleBurger: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

button {
  background: #ebabcd;
  border: none;
  border-radius: 0.375rem;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
}
button:hover {
  box-shadow: 0px 0px 5px 0 #ebabcd;
}
.hamburger-links {
  background: #ebabcd;
  font-size: 2rem;
  border: 2px solid $primary-color;
  border-radius: $main-radius;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 67px;
  left: 40%;
  right: 10px;
  a {
    color: $dark-bg;
    padding: 10px;
    text-decoration: none;
  }
  a:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid $dark-bg;
  }
}

.nav__items-burger {
  display: none;
}
</style>
