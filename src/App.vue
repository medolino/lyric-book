<template>
  <div id="app">
    <div id="navigation">
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-brand>
          <router-link :to="{ name: 'Songs' }" class="color-white">
            <img v-bind:src="logo" class="logo">
            &nbsp;
            {{ appName }}
          </router-link>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
const logoPath = process.env.LOGO_PATH || './assets/logo.png';
const logo = require(`${logoPath}`); // eslint-disable-line import/no-dynamic-require

export default {
  name: 'app',
  data() {
    return {
      appName: process.env.APP_NAME,
      logo,
    };
  },
};
</script>

<style>
html {
  background-color: #F2F2F2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F2F2F2;
  color: #5E5E5E;
}

a {
  color: #5E5E5E;
  text-decoration: none;
}

a:hover {
  color: #5E5E5E;
  text-decoration: none;
}

a.color-white {
  color: #FFFFFF;
}

.logo {
  max-width: 120px;
  max-height: 50px;
  margin-bottom: 6px;
}
</style>
