
<template>
  <!--search nav starts-->

  <div>
   <staffNav></staffNav> 
  </div>
  <!--search nav ends-->

   <!--buttton nav starts-->
   <div class="button-nav-wrapper mt-3 ps-3">
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
          All Staff
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
          Invites
        </button>
      </li>
    </ul>
  </div>

  <!--buttton nav ends-->

  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <allstaff></allstaff>
    </div>
    <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <invites></invites>
    </div>
  </div>  

</template>

<script lang="ts" setup>

import staffNav from '@/components/search-nav/staff-nav.vue';

import allstaff from "@/components/staff/allstaff.vue"

import invites from '@/components/staff/invites.vue';
</script>