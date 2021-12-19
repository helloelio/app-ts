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
import { defineComponent, ref } from 'vue';
import LoginPage from '@/views/LoginPage.vue';
import CoockieMessage from '@/UI/CoockieMessage.vue';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
import Login from './interfaces/Login';
import hellperAcceptCoockies from '@/helpers/helperAcceptCoockies';

export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
    CoockieMessage,
    TheNavigation,
  },

  setup() {
    let isLogin = ref(false);
    let isAllreadyLogin = ref(false);
    let coockiesMessageShow = ref(true);

    return { isLogin, isAllreadyLogin, coockiesMessageShow };
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
      this.coockiesMessageShow = hellperAcceptCoockies();
    },

    checkCoockie(): void {
      if (this.getCoockieStatusFromLocalStorage) {
        this.coockiesMessageShow = false;
      }
    },

    login(payload: Login): void {
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

    setItemToLocalStorage(payload: Login): void {
      localStorage.setItem('username', payload.name);
      localStorage.setItem('password', payload.password);
    },

    removeItemFromLocalStorage(): void {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    },
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
#app {
  background-color: rgb(32, 32, 35);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.container {
  max-width: 100ch;
  margin: 0 auto;
}

a {
  color: #fff;
  text-decoration: none;
}

.title {
  font-size: 2rem;
  margin: 30px 0;
}

.blinked {
  color: rgba(255, 255, 255, 0.7);
  animation: blink 2s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .container {
    max-width: 45ch;
  }
}
</style>
