<template>
  <div class="id-nav bg-white ps-4" v-if="loaded">
    <div class="icon me-2">
      <router-link to="/staff">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 12.2744L19.25 12.2744"
            stroke="#14213C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
            stroke="#14213C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <p>{{ staff.firstname }} {{ staff.lastname }}</p>
  </div>
  <!--buttton nav starts-->
  <div class="button-nav-wrapper mt-3 ps-3">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active btn"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Staff Details
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Transactions
        </button>
      </li>
    </ul>
  </div>

  <!--buttton nav ends-->

  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <staffDetails :staff="staff"></staffDetails>
    </div>
    <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <transactions></transactions>
    </div>
  </div>
</template>

<script lang="ts" setup>
import staffDetails from "@/components/staff/staff-details.vue";

import transactions from "@/components/staff/transactions.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const staff: any = ref({});
const loaded = ref(false);

const getStaff = () => {
  store.commit("setLoader", true);
  store
    .dispatch("get", `organization/byId/${route.params.id}`)
    .then((resp) => {
      loaded.value = true;
      staff.value = resp.data.data.data;
      store.commit("setLoader", false);
    })
    .catch(() => {
      store.commit("setLoader", false);
    });
};

onMounted(() => {
  getStaff();
});
</script>
<style lang="scss" scoped></style>
