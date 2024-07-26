<template>
  <div class="profile-wrapper">
    <div class="info-page">
      <div class="head-text my-3">
        <h6>Basic Information</h6>
      </div>
      <form>
        <div class="row">
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">First name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your first name"
              v-model="user.firstname"
            />
          </div>
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">Last name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your last name"
              v-model="user.lastname"
            />
          </div>
        </div>

        <div class="each-field mb-3">
          <label class="mb-2" for="email">Email Address</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control"
            placeholder="Enter your email address"
            disabled
          />
        </div>
        <div class="each-field mb-3">
          <label class="mb-2" for="number">Phone number</label>
          <vue-tel-input
            v-model="phone"
            @country-changed="countryChanged"
            mode="international"
          ></vue-tel-input>
        </div>
        <div class="each-field mb-3">
          <label class="mb-2" for="address">Home Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your home address"
            v-model="user.home_address"
          />
        </div>

        <div class="each-field mt-3">
          <button
            class="button btn btn-primary text-white border-0"
            type="submit"
            @click.prevent="updateUser()"
          >
            <span v-if="loading" style="color: #fff">Loading...</span>
            <span v-else style="color: #fff">Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useToast } from "vue-toast-notification";
  import { useStore } from "vuex";
  import { VueTelInput } from "vue-tel-input";
  import "vue-tel-input/vue-tel-input.css";

  const store = useStore();
  const user = ref(store.state.user);
  const loading = ref(false);
  const phone = ref("");
  const pre_phone_number = ref("");
  const countryChanged = (phoneObject: any) => {
    pre_phone_number.value = phoneObject.dialCode;
  };

  const updateUser = () => {
    var rep = phone.value.replace(`+${pre_phone_number.value}`, "");
    rep = rep.replaceAll(" ", "");
    loading.value = true;
    store
      .dispatch("patch", {
        endpoint: "/organization/profile",
        details: {
          ...user.value,
          pre_phone_number: pre_phone_number.value,
          phone_number: rep,
          supermarket_id: user.value.supermarket_id._id,
        },
      })
      .then((resp) => {
        loading.value = false;
        useToast().success("Profile updated successfully");
      });
  };

  const getUser = () => {
    store.commit("setLoader", true);
    store
      .dispatch("get", "organization/profile")
      .then((resp) => {
        store.commit("setUser", {
          profile: resp.data.data,
          token: store.state.token,
        });
        store.commit("setLoader", false);
      })
      .catch(() => {
        store.commit("setLoader", false);
      });
  };

  onMounted(() => {
    getUser();
    phone.value =
      "+" + user.value.pre_phone_number + "" + user.value.phone_number;
  });
</script>

<style lang="scss" scoped></style>
