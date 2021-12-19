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
import Login from '@/interfaces/Login';
import { ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    WrongFields,
    LoginFrom,
  },

  setup() {
    let validate = ref(false);
    return { validate };
  },

  mounted() {
    document.title = 'Login';
  },

  methods: {
    login(payload: Login): void {
      if (payload.name === '' || payload.password === '') {
        this.validate = true;
        setTimeout(() => {
          this.validate = false;
        }, 2000);
      } else {
        this.$emit('login', payload);
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
