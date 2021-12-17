<template>
  <div class="coockie-message">
    <div class="coockie-message__block-content">
      <h3 class="coockie-message__title">This website uses cookies.</h3>
      <p class="coockie-message__test">
        We use cookies to personalise content and ads, to provide social media
        features and to analyse our traffic. We also share information about
        your use of our site with our social media, advertising and analytics
        partners who may combine it with other information that you’ve provided
        to them or that they’ve collected from your use of their services.
      </p>
    </div>
    <div class="coockie-message__block-button">
      <button
        @click="this.$emit('acceptCoockies')"
        class="coockie-message__button"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoockieMessage',
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.coockie-message {
  background-color: $dark-bg;
  color: $primary-color;
  box-shadow: 0px 0px 10px 0px black;
  width: 65%;
  position: fixed;
  display: grid;
  justify-content: center;
  text-align: left;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 0.375rem;
  margin-bottom: 60px;
  &__title {
    margin-bottom: 10px;
  }
  &__block-button {
    justify-self: end;
  }
  &__button {
    background-color: $light-bg;
    font-size: 1.1rem;
    color: white;
    font-weight: bold;
    border: 2px solid #fff;
    padding: 15px 45px;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  &__button:hover {
    background-color: #fff;
    color: $dark-bg;
    border: 2px solid $light-bg;
  }
}
</style>
