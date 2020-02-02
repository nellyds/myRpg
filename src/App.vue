<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

#app {
  font-family: "Final Fantasy Script Collection - Final Fantasy VII", Helvetica, Arial, sans-serif;

  text-align: center;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
