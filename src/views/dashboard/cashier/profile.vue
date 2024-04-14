<template>
  <!--buttton nav starts-->
  <div class="profile ps-3">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active btn"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Basic Info
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Change Password
        </button>
      </li>
    </ul>
  </div>
  <!--buttton nav ends-->

  <!--search  nav and table starts-->

  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <basicInfo></basicInfo>
    </div>
    <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <changePassword></changePassword>
    </div>
  </div>

  <!--search  nav and table ends-->
</template>

<script lang="ts" setup>
  import basicInfo from "@/components/profile/cashier/basic_info.vue";

  import changePassword from "@/components/profile/cashier/change_password.vue";
</script>

<style lang="scss" scoped>
  .profile {
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 13px;
  }
</style>
