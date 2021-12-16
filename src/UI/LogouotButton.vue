<template>
  <div class="nav__logout">
    <button @click="this.$emit('logout')" class="nav__logout-btn">
      <img src="@/assets/images/logout.svg" alt="" />
      Logout
    </button>
  </div>
</template>

<style lang="scss" scoped>
.nav__logout {
  display: flex;
  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 7.5rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #184968;
    border: 2px solid #184968;
    border-radius: 4px;
    padding: 5px 10px;
    color: #fff;
    transition: 0.3s ease;
    cursor: pointer;
  }
  &-btn:hover {
    background-color: #fff;
    color: #184968;
  }
}
</style>
