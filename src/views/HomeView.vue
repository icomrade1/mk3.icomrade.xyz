<template>
  <div class="scrollcontainer">
    <div style="display: flex; justify-content: center">
      <router-link id="siktir-git" to="/">Benim Hakkimda</router-link>
      <span id="siktir-git"> |</span>
      <router-link id="siktir-git" to="/yetenekler">Yeteneklerim</router-link>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div style="width: 900px; height: 300px"></div>
    <div class="kiddo">
      <iframe
        src="https://www.youtube.com/embed/V-x9i7xhtpc"
        width="50%"
        height="500px"
        frameborder="0"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let bool = window.location.pathname == "/";
</script>
