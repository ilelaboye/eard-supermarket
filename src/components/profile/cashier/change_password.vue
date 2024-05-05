<template>
  <div class="profile-wrapper">
    <div class="info-page">
      <div class="head-text my-3">
        <h6>Change Password</h6>
      </div>
      <form @submit.prevent="changePassword()">
        <div class="mb-3 each-field">
          <label for="password" class="mb-2">Current Password</label>
          <div class="password-container">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter cuurent password"
              class="form-control"
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
        <div class="mb-3 each-field">
          <label for="password" class="mb-2">New Password</label>
          <div class="password-container">
            <input
              v-model="Npassword"
              :type="seePassword ? 'text' : 'password'"
              placeholder="Enter new password"
              class="form-control"
            />
            <span
              @click="displayPassword"
              class="show-password text-primary fw-bold"
              >{{ seePassword ? "Hide" : "Show" }}</span
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
        <div class="mb-3 each-field">
          <label for="Cpassword" class="mb-2">Confirm Password</label>
          <div class="password-container">
            <input
              v-model="Cpassword"
              :type="seemyPassword ? 'text' : 'password'"
              placeholder="confirm  password"
              class="form-control"
            />
            <span
              @click="displaymyPassword()"
              class="show-password text-primary fw-bold"
              >{{ seemyPassword ? "Hide" : "Show" }}</span
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
          <button
            class="button btn-primary btn text-white border-0"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script setup lang="ts">
  import { ref } from "vue";
  import { useToast } from "vue-toast-notification";
  import { useStore } from "vuex";

  const store = useStore();
  const password = ref("");
  const Npassword = ref("");
  const Cpassword = ref("");
  const showPassword = ref(false);
  const seemyPassword = ref(false);
  const seePassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const displayPassword = () => {
    seePassword.value = !seePassword.value;
  };
  const displaymyPassword = () => {
    seemyPassword.value = !seemyPassword.value;
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

  const changePassword = () => {
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
    } else if (Npassword.value !== Cpassword.value) {
      errors.value.Cpassword = true;
      eMsg.value.Cpassword = "Password does not match";
      return;
    } else {
      errors.value.Cpassword = false;
    }
    // window.location.href = "/";
    store.commit("setLoader", true);
    store
      .dispatch("post", {
        endpoint: "organization/change-password",
        details: { oldPassword: password.value, password: Npassword.value },
      })
      .then((resp) => {
        store.commit("setLoader", false);
        console.log(resp);
        useToast().success("Password changed successfully");
        window.location.href = "/";
      })
      .catch(() => {
        store.commit("setLoader", false);
      });
  };
</script>
