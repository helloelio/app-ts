<template>
  <WrongFields :validate="validate" />
  <div class="login-block">
    <LoginFrom @login="login" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WrongFields from '@/UI/WrongFields.vue';
import LoginFrom from '@/components/login/LoginForm.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    WrongFields,
    LoginFrom,
  },

  data() {
    return {
      validate: false,
    };
  },

  methods: {
    login(payload: Record<string, string>): void {
      if (payload.name === '' || payload.password === '') {
        this.validate = true;
        setTimeout(() => {
          this.validate = false;
        }, 3000);
      } else {
        this.$emit('login', { name: payload.name, password: payload.password });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.login-block {
  background-color: $dark-bg;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
