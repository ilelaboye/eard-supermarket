<template>
  <div class="layout-wrapper">
    <!--Sidebar starts-->
    <sidebar></sidebar>
    <!--Sidebar ends-->
    <div class="main-page">
      <!--navbar starts-->
      <navbar></navbar>
      <!--navbar ends-->
      <div class="other-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import sidebar from "@/components/dashboard/sidebar.vue";
  import navbar from "@/components/dashboard/navbar.vue";
  import { useStore } from "vuex";

  const store = useStore();
  store.commit("getUser");
</script>

<style lang="scss" scoped>
 
</style>
