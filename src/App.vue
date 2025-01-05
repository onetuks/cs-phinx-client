<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <SideBar :hidden="!isFooterHidden" />
    <router-view class="flex-grow" />
    <Footer :hidden="isFooterHidden" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
import { useRoute } from "vue-router";
import SideBar from "@/components/layout/SideBar.vue";

@Options({
  components: {
    SideBar,
    Header,
    Footer,
  },
})
export default class App extends Vue {
  private route = useRoute();

  get isFooterHidden(): boolean {
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
