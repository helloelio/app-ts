<template>
  <div class="header">
    <div class="title">Hello, I'm fronted developer</div>
    <div class="subtitle">
      <div class="about">
        <div class="name">Gleb Medvedev</div>
        <div class="proffesion">Artist, Musican enjoyer, Developer</div>
      </div>
      <div class="subimage">
        <img src="@/assets/images/my-photo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
.header {
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  .main-image {
    border-radius: 50%;
    height: 25ch;
  }
  .title {
    font-family: 'Press Start 2P', cursive;
    background-color: rgba(255, 255, 255, 0.16);
    padding: 10px 20px;
    border-radius: $main-radius;
    font-size: 1rem;
    margin: 30px 0;
  }
  .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .about {
      text-align: left;
      margin-bottom: 15px;
      .name {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    .subimage {
      margin-left: 20px;
      img {
        border-radius: 50%;
        border: 1px solid #fff;
        height: 10ch;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .header {
    .title {
      font-size: 1rem;
    }
    .subtitle {
      .name {
        text-align: center;
      }
      .proffesion {
        text-align: center;
      }
      .subimage {
        margin-left: 0;
      }
    }
  }
}
</style>
