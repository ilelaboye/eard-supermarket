<template>
  <div class="navbar-wrapper">
    <div class="navbar-items">
      <div class="nav-text">
        <p class="fs-5">{{ route.name }}</p>
      </div>
      <div class="nav-profile">
        <div class="initials">
          <h5 class="initials-text">AB</h5>
        </div>
        <div class="profile-name">
          <h6 class="text-primary">Abike Balogun</h6>
          <span class="text-primary">Cashier</span>
        </div>
        <div class="dropdown-icon">
          <svg
            width="24"
            height="24"
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
  const route = useRoute();
  console.log(route.name);
</script>

<style lang="scss" scoped>
  .navbar-wrapper {
    width: calc(100vw - 280px);
    height: 80px;
    background: white;
    padding: 10px 23px;

    .navbar-items {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-profile {
        background-color: #f5f4ff;
        padding: 15px;
        width: 265px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 30px;

        .initials {
          height: 45px;
          width: 45px;
          background-color: #251b6c;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          .initials-text {
            color: #fff;
          }
        }

        .profile-name {
          color: #251b6c !important;

          span {
            color: #251b6c;
          }
        }
      }
    }
  }
</style>
