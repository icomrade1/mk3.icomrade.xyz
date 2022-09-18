<template>
  <div>
    <div id="content">
      <router-link to="/" style="visibility: 0"></router-link>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
@import "../src/assets/styles/stylia.scss";

#content a.router-link-exact-active {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: auto;
  background-clip: border-box;
  background-size: 400% 400%;
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: animate 5s infinite;
}

.fade-enter-from,
.fade-leave.to {
  opacity: 0;
  transform: translateX(-100px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}
</style>
