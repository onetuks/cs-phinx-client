<template>
  <div id="app">
    <Header />
    <side-bar v-if="UserRoleUtil.isManager()" />
    <div class="app-body">
      <router-view :key="$route.fullPath" class="flex-grow" />
    </div>
    <Footer />
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

<style></style>
