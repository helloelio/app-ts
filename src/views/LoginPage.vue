<template>
  <div class="login-block">
    <form
      class="login"
      action="#"
      @submit.prevent="
        this.$emit('login', { name: this.name, password: this.password })
      "
    >
      <label class="login__username" for="username"
        >Username
        <input v-model="name" type="text" name="username" required />
      </label>
      <label class="login__password" for="password"
        >Password
        <input
          ref="password"
          v-model="password"
          type="password"
          name="password"
          required
        />
        <span
          v-if="!vissiblePassword"
          class="vision-button"
          @click.stop="showPassword(this.$refs.password)"
        >
          <img src="@/assets/Vector.svg" alt="" />
        </span>
        <span
          v-else
          class="vision-button"
          @click.stop="showPassword(this.$refs.password)"
        >
          <img src="@/assets/eye-invisible.svg" alt="" />
        </span>
      </label>
      <input class="login__submit" type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      name: '',
      password: '',
      vissiblePassword: false,
    };
  },

  methods: {
    showPassword(ref: HTMLInputElement): void {
      this.vissiblePassword = this.vissiblePassword ? false : true;
      if (this.vissiblePassword) {
        ref.type = 'text';
      } else {
        ref.type = 'password';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login-block {
  background-color: #184968;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.login {
  &__username {
    color: #fff;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 15px;
    width: 12rem;
  }
  &__username input {
    font-size: 1rem;
    padding: 5px 0;
    box-shadow: 0px 0px 5px black;
  }
  &__password {
    color: #fff;
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 15px;
    width: 12rem;
  }
  &__password input {
    font-size: 1rem;
    padding: 5px 0;
    box-shadow: 0px 0px 5px black;
  }
  &__submit {
    background-color: #39a8ef;
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
    background-color: #fff;
    color: #39a8ef;
  }
}
.vision-button {
  position: absolute;
  background: none;
  border: none;
  right: 5px;
  top: 50%;
}
</style>
