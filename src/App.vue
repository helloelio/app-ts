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
import { computed, defineComponent, ref } from 'vue';
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

    const getItemFromLocalStorage = computed((): boolean => {
      return (
        localStorage.getItem('username') !== null &&
        localStorage.getItem('password') !== null
      );
    });

    const getCoockieStatusFromLocalStorage = computed((): boolean => {
      return localStorage.getItem('coockie') === 'true';
    });

    checkLogin();
    checkCoockie();

    function acceptCoockies(): void {
      coockiesMessageShow.value = hellperAcceptCoockies();
    }

    const login = (payload: Login): void => {
      if (isAllreadyLogin.value) {
        isLogin.value = isLogin.value ? false : true;
      } else {
        setItemToLocalStorage(payload);
        isLogin.value = isLogin.value ? false : true;
      }
    };

    const setItemToLocalStorage = (payload: Login): void => {
      localStorage.setItem('username', payload.name);
      localStorage.setItem('password', payload.password);
    };

    const removeItemFromLocalStorage = (): void => {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    };

    const logout = (): void => {
      isLogin.value = false;
      isAllreadyLogin.value = false;
      removeItemFromLocalStorage();
    };

    function checkCoockie(): void {
      if (getCoockieStatusFromLocalStorage.value) {
        coockiesMessageShow.value = false;
      }
    }

    function checkLogin(): void {
      if (getItemFromLocalStorage.value) {
        isAllreadyLogin.value = isLogin.value = true;
      }
    }

    return {
      isLogin,
      isAllreadyLogin,
      coockiesMessageShow,
      acceptCoockies,
      setItemToLocalStorage,
      removeItemFromLocalStorage,
      login,
      logout,
      checkLogin,
      checkCoockie,
    };
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
