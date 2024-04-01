<template>
  <div class="background">
    <div class="container-fluid bg-white wrapper">
      <div class="col-1">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </div>
        <div class="hero-text">
          <h3 class="head-text f-w-bold">Forgot Password</h3>
          <span class="head-span" style="font-size: 15px"
            >Kindly input the email address linked to your account in order to
            reset your password.</span
          >

          <form @submit.prevent="login()" class="form mt-4">
            <div class="mb-3">
              <label for="email" class="fw-bold mb-2">Email Address</label>
              <div>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email address "
                  class="form-control"
                  style="height: 36px"
                />
              </div>
              <div
                v-if="errors.email"
                class="error-msg text-danger ms-2"
                style="font-size: 11px"
              >
                {{ eMsg.email }}
              </div>
            </div>

            <div class="d-grid mt-5">
              <button
                type="submit"
                class="btn fw-bold btn-primary rounded-pill"
                style="height: 36px"
              >
                Submit
              </button>
            </div>
            <div class="mt-4 text-center">
              <router-link :to="{ name: 'Login' }" class="text-decoration-none">
                <i
                  class="fa fa-arrow-left me-1 text-primary"
                  aria-hidden="true"
                ></i
                ><span class="text-primary fw-bold">Go back to Login</span>
              </router-link>
            </div>
          </form>
        </div>
      </div>
      <div class="col-2">
        <img src="@/assets/images/background.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const errors = ref({
  email: false,
});
const eMsg = ref({
  email: "This field is required",
});

const login = () => {
  if (email.value == "") {
    errors.value.email = true;
    return;
  } else if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    errors.value.email = true;
    eMsg.value.email = "Invalid Email";
    return;
  } else {
    errors.value.email = false;
  }

  window.location.href = "/otp";
};
</script>
