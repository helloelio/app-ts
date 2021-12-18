<template>
  <div id="nav">
    <MainMenu />
    <div style="display: flex">
      <HamburgerMenu />
      <LogoutButton @logout="$emit('logout')" />
    </div>
  </div>
  <div class="plant">
    <Plant />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoutButton from '@/UI/LogouotButton.vue';
import HamburgerMenu from '@/components/navigation/hamburger/HamburgerMenu.vue';
import MainMenu from '@/components/navigation/main/MainMenu.vue';
import Plant from '@/UI/Plant.vue';

export default defineComponent({
  name: 'TheNavigation',
  components: {
    LogoutButton,
    HamburgerMenu,
    MainMenu,
    Plant,
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
}
.plant {
  display: flex;
  justify-content: center;
  padding-top: 70px;
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
  }
  ::v-deep .nav__items-additionaly {
    display: none !important;
  }
  ::v-deep .nav__items-burger {
    display: flex !important;
  }
}
</style>
