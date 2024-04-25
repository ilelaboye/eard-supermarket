<template>
  <div class="layout-wrapper">
    <loader v-if="loading"></loader>
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
  import loader from "@/components/dashboard/loader.vue";
  import { computed } from "vue";

  const store = useStore();
  store.commit("getUser");
  const loading = computed(() => {
    return store.state.loader;
  });
</script>

<style lang="scss" scoped></style>
