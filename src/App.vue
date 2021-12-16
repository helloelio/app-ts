<template>
  <div v-if="!isLogin">
    <LoginPage @login="login" />
  </div>
  <div v-else>
    <TheNavigation @logout="logout" />
    <div class="container">
      <router-view />
    </div>
    <CoockieMessage
      @acceptCoockies="acceptCoockies"
      v-show="coockiesMessageShow"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPage from '@/views/LoginPage.vue';
import CoockieMessage from '@/UI/CoockieMessage.vue';
import TheNavigation from '@/components/TheNavigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
    CoockieMessage,
    TheNavigation,
  },

  data() {
    return {
      isLogin: false,
      isAllreadyLogin: false,
      coockiesMessageShow: true,
    };
  },

  computed: {
    getItemFromLocalStorage(): boolean {
      return (
        localStorage.getItem('username') !== null &&
        localStorage.getItem('password') !== null
      );
    },
    getCoockieStatusFromLocalStorage(): boolean {
      return localStorage.getItem('coockie') === 'true';
    },
  },

  created() {
    this.checkLogin();
    this.checkCoockie();
  },

  methods: {
    acceptCoockies(): void {
      localStorage.setItem('coockie', 'true');
      this.coockiesMessageShow = this.coockiesMessageShow ? false : true;
    },

    checkCoockie(): void {
      if (this.getCoockieStatusFromLocalStorage) {
        this.coockiesMessageShow = false;
      }
    },

    login(payload: Record<string, string>): void {
      if (this.isAllreadyLogin) {
        this.isLogin = this.isLogin ? false : true;
      } else {
        this.setItemToLocalStorage(payload);
        this.isLogin = this.isLogin ? false : true;
      }
    },

    checkLogin(): void {
      if (this.getItemFromLocalStorage) {
        this.isAllreadyLogin = true;
        this.isLogin = this.isLogin ? false : true;
      }
    },

    logout(): void {
      this.isLogin = this.isLogin ? false : true;
      this.isAllreadyLogin = false;
      this.removeItemFromLocalStorage();
    },

    setItemToLocalStorage(payload: Record<string, string>) {
      localStorage.setItem('username', payload.name);
      localStorage.setItem('password', payload.password);
    },

    removeItemFromLocalStorage() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    },
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-color: #184968;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.container {
  padding-top: 96px;
}
</style>
