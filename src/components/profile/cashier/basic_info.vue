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
          <img src="" alt="" />
          <input
            type="number"
            v-model="user.phone_number"
            class="form-control input-group"
          />
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
  import { useStore } from "vuex";

  const store = useStore();
  const user = ref(store.state.user);
  const loading = ref(false);

  const updateUser = () => {
    loading.value = true;
    store
      .dispatch("patch", {
        endpoint: "/organization/profile",
        details: user.value,
      })
      .then((resp) => {
        loading.value = false;
        console.log(resp);
      });
  };

  const getUser = () => {
    store.dispatch("get", "get-profile").then((resp) => {
      console.log(resp);
    });
  };

  onMounted(() => {
    getUser();
  });
</script>

<style lang="scss" scoped></style>
