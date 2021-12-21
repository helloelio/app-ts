<template>
  <section class="home-main">
    <article>
      <h2 class="title">About <span class="blinked">_</span></h2>
      <p>
        Hello again, 👋 my name is Gleb Medvedev, I'm studyinh the frontend,
        doing my own small projects 🗂️. I like the viesual ✨ 𝚙𝚊𝚛𝚝 𝚘𝚏 𝚝𝚑𝚎 𝚜𝚒𝚝𝚎𝚜,
        part of the sites, that's why I really love css and js for the
        interactivity amd functionality ⚙️ of these sites.
      </p>
      <router-link to="/works">My porfolio</router-link>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.title {
  font-size: 2rem;
}
.home-main {
  margin-bottom: 10px;
  a {
    display: block;
    max-width: 20ch;
    margin: 15px auto;
    font-size: 1.5rem;
    color: $primary-color;
    text-decoration: none;
    background-color: $additionaly-bg;
    border-radius: $main-radius;
    padding: 5px;
    text-align: center;
    transition: all 0.2s ease;
  }
  a:hover {
    background-color: $additionaly-bg;
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
</style>
