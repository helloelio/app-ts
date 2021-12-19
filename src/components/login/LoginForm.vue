<template>
  <form class="login" action="#" @submit.prevent="onSubmit">
    <label class="login__username" for="username"
      >Username
      <input v-model="name" type="text" name="username" />
    </label>
    <label class="login__password" for="password"
      >Password
      <input ref="password" v-model="pass" type="password" name="password" />
      <span
        v-if="!vissiblePassword"
        class="vision-button"
        @click.stop="showPassword(this.$refs.password)"
      >
        <img src="@/assets/images/eye-open.svg" alt="" />
      </span>
      <span
        v-else
        class="vision-button"
        @click.stop="showPassword(this.$refs.password)"
      >
        <img src="@/assets/images/eye-closed.svg" alt="" />
      </span>
    </label>
    <input class="login__submit" type="submit" value="Login" />
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',

  setup(_, context) {
    const name = ref('');
    const pass = ref('');
    let vissiblePassword = ref(false);

    function onSubmit() {
      context.emit('login', { name: name, password: pass });
    }

    function showPassword(password: HTMLInputElement): void {
      vissiblePassword.value = !vissiblePassword.value;
      if (vissiblePassword.value) {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    }

    return { name, pass, vissiblePassword, showPassword, onSubmit };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
@import '@/assets/style/_mixins.scss';

.login {
  &__username {
    @include input-block;
  }
  &__username input,
  &__password input {
    @include input;
    padding-right: 35px;
  }
  &__password {
    @include input-block;
    .vision-button {
      position: absolute;
      height: 24px;
      background: none;
      border: none;
      right: 5px;
      top: 50%;
      cursor: pointer;
    }
  }
  &__submit {
    background-color: $light-bg;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    align-self: center;
    margin-bottom: 15px;
    max-width: 12rem;
    width: 12rem;
    padding: 10px 0;
    box-shadow: 0px 0px 5px black;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s;
  }
  &__submit:hover {
    background-color: $primary-color;
    color: $secondary-color;
  }
}
</style>
