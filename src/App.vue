<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <div class="flex flex-row flex-grow overflow-auto">
      <side-bar v-if="isManagerPage" />
      <router-view :key="$route.fullPath" class="flex-grow bg-gray-200" />
    </div>
    <Footer v-if="!isManagerPage" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
  get isManagerPage(): boolean {
    return this.$route.path.includes("/manager");
  }
}

// 폰트 적용 취소 (#app 블록에 넣으면 됨)
//font-family: DungGeunMo, sans-serif;
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
