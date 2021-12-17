<template>
  <div class="home">
    <div class="header">
      <div class="title">Hello, I'm fronted developer</div>
      <div class="subtitle">
        <div class="about">
          <div class="name">Gleb Medvedev</div>
          <div class="proffesion">Artist, Musican enjoyer, Developer</div>
        </div>
        <div class="subimage">
          <img src="@/assets/images/70343671.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  .header {
    align-self: center;
    text-align: center;
    .main-image {
      border-radius: 50%;
      height: 25ch;
    }
    .title {
      background-color: rgba(255, 255, 255, 0.16);
      padding: 10px 20px;
      border-radius: 0.375rem;
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
    .subtitle {
      display: grid;
      grid-template-columns: 80% 20%;
      align-items: center;
      .about {
        text-align: left;
        .name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 5px;
        }
      }
      .subimage img {
        border-radius: 50%;
        border: 1px solid #fff;
        height: 10ch;
      }
    }
  }
}
</style>
