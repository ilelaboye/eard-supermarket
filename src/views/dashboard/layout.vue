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
  .layout-wrapper {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background: rgba(247, 247, 247, 0.959);
    .other-page {
      padding: 15px;
    }
  }
</style>
