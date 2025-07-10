<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    <side-bar v-if="UserRoleUtil.isManager()" />
    <div class="flex flex-row flex-grow overflow-auto px-40">
      <router-view :key="$route.fullPath" class="flex-grow" />
    </div>
    <Footer v-if="!UserRoleUtil.isManager()" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layouts/Footer.vue";
import Header from "@/components/layouts/Header.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import { UserRoleUtil } from "@/utils/UserRoleUtil";

@Options({
  methods: { UserRoleUtil },
  components: {
    SideBar,
    Header,
    Footer,
  },
})
export default class App extends Vue {
  UserRoleUtil = UserRoleUtil;
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
