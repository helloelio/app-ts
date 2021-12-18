<template>
  <div class="nav__logout">
    <button @click="$emit('logout')" class="nav__logout-btn">
      <img src="@/assets/images/logout.svg" alt="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LogoutButton',
});
</script>

<style lang="scss" scoped>
.nav__logout {
  display: flex;
  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1rem;
    font-weight: bold;
    background-color: #bd0000;
    border-radius: 0.375rem;
    border: none;
    padding: 5px 10px;
    color: #fff;
    transition: 0.3s ease;
    cursor: pointer;
  }
  &-btn:hover {
    box-shadow: 0px 0px 10px #bd0000;
  }
}
</style>
