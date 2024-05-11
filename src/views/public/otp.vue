<template>
  <div class="whole-page">
    <div class="container-fluid bg-white wrapper">
      <div class="col-1">
        <div class="lg-wrap form-page">
          <div class="logo">
            <img src="@/assets/images/logo.svg" alt="" />
          </div>
          <div class="hero-text">
            <div class="mb-4">
              <router-link :to="{ name: 'Login' }" class="text-decoration-none">
                <i
                  class="fa fa-arrow-left me-1 text-primary"
                  aria-hidden="true"
                ></i
                ><span class="text-primary fw-bold">Go back to Login</span>
              </router-link>
            </div>

            <h3 class="head-text">OTP Authentication</h3>
            <span class="head-span" style="font-size: 15px"
              >Enter the 6-digit code we sent to your email address to reset
              your password</span
            >

            <form @submit.prevent="login()" class="form mt-4">
              <div class="mb-3">
                <label for="email" class="mb-2">Enter Code</label>

                <div class="text-center">
                  <input
                    type="tel"
                    v-model="box1"
                    class="form-control box text-center"
                  />
                </div>

                <div
                  v-if="errors.code"
                  class="error-msg text-danger text-center mt-2 fw-500"
                  style="font-size: 14px"
                >
                  {{ eMsg.code }}
                </div>
              </div>

              <div class="d-grid mt-5">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill"
                  style="height: 40px"
                >
                  Submit
                </button>
              </div>
              <div class="mt-3 text-center">
                <p style="font-size: 15px">
                  Didn't get the code?
                  <span class="text-primary fw-bold">Resend in 01:58 </span>
                </p>
              </div>
            </form>
          </div>
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
import { ref,} from "vue";


const box1 = ref("");
const errors = ref({
  code: false,
});
const eMsg = ref({
  code: "Enter the correct code",
});

const login = () => {
  if (box1.value == "") {
    errors.value.code = true;
    return;
  } else {
    errors.value.code = false;
  }


  //   } else if (
  //     !codes.box.match(
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //     )
  //   ) {

  // window.location.href = "/reset";
};
</script>
