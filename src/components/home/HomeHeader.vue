<template>
  <div class="header">
    <img
      src="https://camo.githubusercontent.com/c60efeb93a6c0d024651f3f27a6cebb51021e792b3b10417a4813e6ff4a3053a/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f33312f38612f63652f33313861636534323662323237356133366237663330386266663564303066312e676966"
      alt="plant"
      height="200"
      width="200"
      style="margin-bottom: 10px"
    />
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
    background-color: rgba(255, 255, 255, 0.16);
    padding: 10px 20px;
    border-radius: 0.375rem;
    font-size: 1.8rem;
    margin-bottom: 15px;
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
