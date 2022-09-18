<!-- eslint-disable prettier/prettier -->
<template>
  <div class="scrollcontainer">
    <div style=" display: flex;  
  justify-content:center;">
    <router-link id="siktir-git" to="/">Benim Hakkimda</router-link>
    <span id="siktir-git">   |</span>
      <router-link id="siktir-git" to="/yetenekler">Yeteneklerim</router-link>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <section id="container" style="align-items: center">
        <h1 id="header">
          <a id="burner"
            href="https://github.com/icomrade1"
            class="btn"
            style="margin-left: 105px"
            ><i class="fa fa-github" aria-hidden="true"></i
          ></a>
          <a id="burner"
            href="https://open.spotify.com/user/31grxvknsiaavfioejdqbpwzus6i?si=899c39dff9eb499c"
            class="btn"
            style="margin-left: 15px"
            ><i class="fa fa-spotify" aria-hidden="true"></i></a
          ><br />
          <span class="set">Esenlikler, Ben </span>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span><br />
          <span class="set2"
            >16 yaşında yazılım okuyup yazılım üzerinde çalışiyorum. Yapay zeka,
            siber guvenlik<br
          /></span>
          <span class="set2">vs. konularina ilgi sahibiyim.</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          <div>
        </div>
        </h1>
       
    </section>
  </div>
  
</template>

<script>
export default {
  name: "typeWriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Deniz!"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 500,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  //prettier-ignore
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/stylia.scss";
</style>
