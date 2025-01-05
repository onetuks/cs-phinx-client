<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <router-view class="flex-grow px-60" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: DungGeunMo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
