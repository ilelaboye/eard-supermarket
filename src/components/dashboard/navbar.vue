<template>
  <div class="navbar-wrapper">
    <div class="navbar-items">
      <div class="d-flex align-items-center">
        <div
        class="toggleClose btn-toggle me-4"
        v-if="!showSidebar"
        @click.prevent="toggleSidebar()"
      >
        <i class="fa fa-bars text-primary"></i>
      </div>
      <div class="nav-text">
        <p class="fs-5">{{ route.name }}</p>
      </div>
      </div>
      

      <div class="nav-profile">
        <div class="initials">
          <h5 class="initials-text text-uppercase">
            {{ user.firstname[0] }}{{ user.lastname[0] }}
          </h5>
        </div>
        <div class="profile-name">
          <h6 class="text-primary text-capitalize">
            {{ user.firstname }} {{ user.lastname }}
          </h6>
          <span class="text-primary">{{
            user.role == "STAFF"
              ? "Cashier"
              : user.role == "OWNER"
              ? "Owner"
              : "Manager"
          }}</span>
        </div>
        <div class="dropdown-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.5L12 15.5L5 8.5"
              stroke="#14213C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import router from '@/router';
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
console.log(route.name);

const store = useStore();
const user = store.state.user;


</script>

<style lang="scss" scoped></style>
