<template>
  <h2 class="title">Works <span class="blinked">_</span></h2>
  <div class="works">
    <WorkItem :works="works" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkItem from '@/components/work/WorkItem.vue';

export default defineComponent({
  name: 'WorkMain',
  components: {
    WorkItem,
  },
  data() {
    return {
      obj: { name: 'asd', age: 23 },
      works: [
        {
          id: 1,
          title: 'eCommerce Component',
          subtitle:
            'e-Commerce-component, a concept of a store and a cart of products (also for mobile)',
          img: require('@/assets/images/WorkThree.png'),
          link: 'https://e-commerce-component.vercel.app/',
        },
        {
          id: 2,
          title: 'Tip Calculator',
          subtitle: 'Build with Vue 3, Vite, Tailwind CSS.',
          img: require('@/assets/images/WorkOne.png'),
          link: 'https://tip-calculator-roan.vercel.app/',
        },
        {
          id: 3,
          title: 'Weather App',
          subtitle: 'Vue weather app with vuex, weatherAPI.',
          img: require('@/assets/images/WorkTwo.png'),

          link: 'https://vue-weather-app-seven.vercel.app/#/',
        },
        {
          id: 4,
          title: 'Google Books',
          subtitle:
            'Test task for a "future group" for a junior frontend developer. ',
          img: require('@/assets/images/WorkFour.png'),

          link: 'href',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
.title {
  font-size: 2rem;
  margin: 30px 0;
}
.works {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    align-self: center;
  }
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

@media screen and (max-width: 600px) {
  .works {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
}
</style>
