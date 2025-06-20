<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <div class="flex flex-row">
      <side-bar v-if="isManagerPage" />
      <router-view class="flex-grow bg-gray-200" :key="$route.fullPath" />
    </div>
    <Footer v-if="!isManagerPage" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRoute } from "vue-router";
import Footer from "@/components/layouts/Footer.vue";
import Header from "@/components/layouts/Header.vue";
import SideBar from "@/components/layouts/SideBar.vue";

@Options({
  components: {
    SideBar,
    Header,
    Footer,
  },
})
export default class App extends Vue {
  private route = useRoute();

  get isManagerPage(): boolean {
    return this.route.path.includes("/manager");
  }
}
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
