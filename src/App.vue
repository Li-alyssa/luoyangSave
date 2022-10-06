<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
  outline: none;
}

a,
button {
  cursor: pointer;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

img {
  border: 0;
}
</style>
