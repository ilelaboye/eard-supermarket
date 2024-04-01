<template>
  <div class="background">
    <div class="container-fluid bg-white wrapper">
      <div class="col-1">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </div>
        <div class="hero-text">
          <h3 class="head-text f-w-bold">Welcome back</h3>
          <span class="head-span" style="font-size: 14px"
            >Sign into your supermarket account to continue</span
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

            <div class="mb-3">
              <label for="password" class="fw-bold mb-2">Password</label>
              <div class="password-container">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  class="form-control"
                  style="height: 36px"
                />
                <span
                  @click="togglePassword"
                  class="show-password text-primary fw-bold"
                  >{{ showPassword ? "Hide" : "Show" }}</span
                >
              </div>
              <div
                v-if="errors.password"
                class="error-msg text-danger ms-2 mb-3"
                style="font-size: 11px"
              >
                {{ eMsg.password }}
              </div>
            </div>

            <p class="text-primary fw-bold mb-2">Forgot password?</p>
            <div class="d-grid mt-4">
              <button
                type="submit"
                class="btn fw-bold btn-primary rounded-pill"
                style="height: 36px"
              >
                Login
              </button>
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
const password = ref("");
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const errors = ref({
  email: false,
  password: false,
});
const eMsg = ref({
  email: "This field is required",
  password: "This field is required",
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

  if (password.value == "") {
    errors.value.password = true;
    return;
  } else {
    errors.value.password = false;
  }
  window.location.href = "/";
};
</script>
