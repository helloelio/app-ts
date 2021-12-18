<template>
  <div class="nav__items">
    <router-link class="logo-text" to="/"
      ><span class="hello-emoji">👋</span>helloelio</router-link
    >
    <div class="nav__items nav__items-additionaly">
      <router-link to="/works">Works</router-link>
      <a href="https://github.com/helloelio"
        ><img
          src="@/assets/images/github.svg"
          target="_blank"
          alt="github-logo"
        />
        Github</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav__items {
  display: flex;
  .logo-text {
    font-family: 'Press Start 2P', cursive;
    font-weight: 400;
  }
}
a {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  .hello-emoji {
    transition: all 0.2s ease-in-out;
    margin-right: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 5px white;
  }
  &:hover > span.hello-emoji {
    animation: hello 1s;
  }
  &.router-link-exact-active {
    border-bottom: 2px solid #fff;
  }
  &.router-link-exact-active:hover {
    border-bottom: 2px solid #fff;
    box-shadow: none;
  }
  img {
    margin-right: 5px;
  }
}

@media (max-width: 600px) {
  a {
    font-size: 1rem;
  }
}
</style>
