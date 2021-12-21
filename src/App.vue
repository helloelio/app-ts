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
import { computed, defineComponent, reactive, toRefs } from 'vue';
import LoginPage from '@/views/LoginPage.vue';
import CoockieMessage from '@/UI/CoockieMessage.vue';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
import LoginModel from './interfaces/LoginModel';
import StateModel from '@/interfaces/StateModel';
import hellperAcceptCoockies from '@/helpers/helperAcceptCoockies';

export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
    CoockieMessage,
    TheNavigation,
  },

  setup() {
    // state
    const state: StateModel = reactive({
      isLogin: false,
      isAllreadyLogin: false,
      coockiesMessageShow: true,
    });

    let { isLogin, isAllreadyLogin, coockiesMessageShow } = toRefs(state); // make state reactive
    // state

    // computed
    const getItemFromLocalStorage = computed((): boolean => {
      return (
        localStorage.getItem('username') !== null &&
        localStorage.getItem('password') !== null
      );
    });

    const getCoockieStatusFromLocalStorage = computed((): boolean => {
      return localStorage.getItem('coockie') === 'true';
    });

    // computed

    // lifeCycles
    checkLogin();
    checkCoockie();

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
    // lifeCycles

    // methods
    const acceptCoockies = (): void => {
      coockiesMessageShow.value = hellperAcceptCoockies();
    };

    const login = (payload: LoginModel): void => {
      if (isAllreadyLogin.value) {
        isLogin.value = isLogin.value ? false : true;
      } else {
        setItemToLocalStorage(payload);
        isLogin.value = isLogin.value ? false : true;
      }
    };

    const setItemToLocalStorage = (payload: LoginModel): void => {
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
    // methods

    return {
      coockiesMessageShow,
      isAllreadyLogin,
      isLogin,
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
