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

            <h3 class="head-text">Reset Password</h3>
            <!-- <span class="head-span" style="font-size: 15px"
              >Enter the 4-digit code we sent to your email address to reset
              your password</span
            > -->

            <form @submit.prevent="resetPassword()" class="form mt-4">
              <div class="mb-3">
                <label for="code" class="mb-2">Enter Code</label>

                <div class="text-center">
                  <input
                    type="text"
                    id="code"
                    v-model="code"
                    class="form-control"
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

              <div class="mb-3">
                <label for="password" class="mb-2">Password</label>
                <div class="password-container">
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="form-control"
                    style="height: 40px"
                  />
                  <span
                    @click="togglePassword()"
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
              <div class="mb-3">
                <label for="password" class="mb-2">Confirm Password</label>
                <div class="password-container">
                  <input
                    v-model="cpassword"
                    :type="seePassword ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="form-control"
                    style="height: 40px"
                  />
                  <span
                    @click="displayPassword()"
                    class="show-password text-primary fw-bold"
                    >{{ seePassword ? "Hide" : "Show" }}</span
                  >
                </div>
                <div
                  v-if="errors.cpassword"
                  class="error-msg text-danger ms-2 mb-3"
                  style="font-size: 11px"
                >
                  {{ eMsg.cpassword }}
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
                  <span
                    @click="resendOTP()"
                    :disabled="countdown > 0"
                    class="text-primary fw-bold"
                  >
                    Resend in {{ countdown }}s</span
                  >
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
  import { useStore } from "vuex";
  import { useRoute, useRouter } from "vue-router";
  import { ref, watch, onMounted } from "vue";
  import { useToast } from "vue-toast-notification";

  const loading = ref(false);
  const code = ref("");
  const password = ref("");
  const cpassword = ref("");
  const showPassword = ref(false);
  const seePassword = ref(false);

  const route = useRoute();
  const store = useStore();
  const router = useRouter();

  const errors = ref({
    code: false,
    password: false,
    cpassword: false,
  });

  const eMsg = ref({
    code: "Enter the correct code",
    email: "This field is required",
    password: "This field is required",
    cpassword: "This field is required",
  });

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const displayPassword = () => {
    seePassword.value = !seePassword.value;
  };

  const resetPassword = () => {
    if (code.value == "") {
      errors.value.code = true;
      return;
    } else {
      errors.value.code = false;
    }

    if (password.value == "") {
      errors.value.password = true;
      return;
    } else {
      errors.value.password = false;
    }
    if (cpassword.value == "") {
      errors.value.cpassword = true;
      return;
    } else if (password.value !== cpassword.value) {
      errors.value.cpassword = true;
      eMsg.value.cpassword = "Password does not match";
      return;
    } else {
      errors.value.cpassword = false;
    }
    loading.value = true;
    store
      .dispatch("post", {
        endpoint: "organization/reset-password",
        details: {
          password: password.value,
          otp: code.value,
          email: route.query.email,
        },
      })
      .then((resp) => {
        loading.value = false;
        console.log(resp);
      })
      .catch(() => {
        loading.value = false;
      });
  };

  const countdownDuration = 60;

  const countdown = ref(0);
  let timer: any;

  const updateCountdown = () => {
    countdown.value -= 1;
  };

  watch(countdown, (newValue) => {
    if (newValue === 0) {
      clearInterval(timer);
    }
  });

  const resendOTP = () => {
    countdown.value = countdownDuration;

    timer = setInterval(updateCountdown, 1500);
  };

  onMounted(() => {
    countdown.value = countdownDuration;
    timer = setInterval(updateCountdown, 1500);

    if (!route.query.email) {
      useToast().error("Please enter your email");
      router.push("/forget-password");
    }
  });
</script>
