<template>
  <div class="content-wrapper">
    <div class="info-page">
      <div class="head-text my-3">
        <h6>Change Password</h6>
      </div>
      <form action="">
        <div class="mb-3">
          <label for="password" class="mb-2">Current Password</label>
          <div class="password-container">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter cuurent password"
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
                {{ eMsg.Password }}
              </div>
        </div>
        <div class="mb-3">
          <label for="password" class="mb-2">New Password</label>
          <div class="password-container">
            <input
              v-model="Npassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter new password"
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
                v-if="errors.Npassword"
                class="error-msg text-danger ms-2 mb-3"
                style="font-size: 12px"
              >
                {{ eMsg.Npassword }}
              </div>
        </div>
        <div class="mb-3">
          <label for="Cpassword" class="mb-2">Confirm Password</label>
          <div class="password-container">
            <input
              v-model="Cpassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="confirm  password"
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
                v-if="errors.Cpassword"
                class="error-msg text-danger ms-2 mb-3"
                style="font-size: 12px"
              >
                {{ eMsg.Cpassword }}
              </div>
        </div>
        <div class="each-field mt-3">
          <button class="button btn-primary btn text-white border-0" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" >
.content-wrapper {
  padding: 20px;
  background: #fff;
  min-height: 100vh;
}

.info-page {
  width: 50%;

  .button {
    height: 45px;
    width: 200px;
    border-radius: 30px;
    margin-top:20px;
  }
}
</style>


<script setup lang="ts">
import { ref } from "vue";


const password = ref("");
const Npassword = ref("");
const Cpassword = ref("");
const showPassword = ref(false);
const seePassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const displayPassword = () => {
  seePassword.value = !seePassword.value;
};

const errors = ref({
 
  password: false,
  Npassword: false,
  Cpassword: false,
});

const eMsg = ref({
  Npassword: "This field is required",
  Password: "This field is required",
  Cpassword: "This field is required",
});

const login = () => {
  

  if (password.value == "") {
    errors.value.password = true;
    return;
  } else {
    errors.value.password = false;
  }

   if (Npassword.value == "") {
    errors.value.Npassword = true;
    return;
  } else {
    errors.value.Npassword = false;
  }

  if (Cpassword.value == "") {
    errors.value.Cpassword = true;
    return;
  } else if (password.value !== Cpassword.value) {
    errors.value.Cpassword = true;
    eMsg.value.Cpassword = "Password does not match";
    return;
  } else {
    errors.value.Cpassword = false;
  }
  window.location.href = "/";
};
</script>

