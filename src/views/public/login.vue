<template>
  <div class="whole-page">
    <div class="container-fluid bg-white wrapper">
      <div class="col-1">
        <div class="lg-wrap form-page">
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
                <label for="email" class="mb-2">Email Address</label>
                <div>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email address "
                    class="form-control"
                    style="height: 40px"
                  />
                </div>
                <div
                  v-if="errors.email"
                  class="error-msg text-danger ms-2"
                  style="font-size: 12px"
                >
                  {{ eMsg.email }}
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
                    @click="togglePassword"
                    class="show-password text-primary fw-bold"
                    >{{ showPassword ? "Hide" : "Show" }}</span
                  >
                </div>
                <div
                  v-if="errors.password"
                  class="error-msg text-danger ms-2 mb-3"
                  style="font-size: 12px"
                >
                  {{ eMsg.password }}
                </div>
              </div>

              <router-link
                :to="{ name: 'F_password' }"
                class="text-decoration-none"
              >
                <p class="text-primary fw-bold mb-2">
                  Forgot password?
                </p></router-link
              >

              <div class="d-grid mt-4">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill"
                  style="height: 40px;'"
                  :disabled="loading"
                >
                  <span v-if="loading">Loading...</span>
                  <span v-else>Login</span>
                </button>
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

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const email = ref("john@gmail.com");
const password = ref("john@gmail.com");
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

const loading = ref(false);

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
  loading.value = true;
  store
    .dispatch("post", {
      endpoint: "organization/login",
      details: {
        email: email.value,
        password: password.value,
        supermarket_id: store.state.supermarket_id,
      },
    })
    .then((resp) => {
      loading.value = false;
      store.commit("setUser", resp.data.data.data);
      if (store.state.user.role == "STAFF") {
        window.location.href = "/orders";
      } else {
        window.location.href = "/transactions";
      }
    })
    .catch((err) => {
      loading.value = false;
    });
};
</script>
<style scoped lang="scss">
.btn {
  span {
    color: #fff;
  }
}
</style>
