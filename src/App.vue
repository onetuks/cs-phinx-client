<template>
  <div id="app" class="flex flex-col min-h-screen">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";

@Options({
  components: {
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
  margin-top: 60px;
  height: 100%;
}
</style>
