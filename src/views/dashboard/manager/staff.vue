<template>
  <div class="main-content">
    <!--search nav starts-->
    <div class="search-nav">
      <div class="search-input">
        <form @submit.prevent="getStaff()">
          <input
            type="search"
            class="input-field form-control ps-5"
            placeholder="Search by Staff"
            v-model="search"
          />
        </form>

        <div class="search-icon" @click="getStaff()">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.80541"
              cy="9.80553"
              r="7.49047"
              stroke="#BBBBBB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0151 15.4043L17.9518 18.3334"
              stroke="#BBBBBB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <!-- Button trigger modal -->
      <div
        class="button btn modal-btn btn-primary rounded-pill ms-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2 8.8002H0.8C0.3584 8.8002 0 8.4418 0 8.0002C0 7.5586 0.3584 7.2002 0.8 7.2002H15.2C15.6416 7.2002 16 7.5586 16 8.0002C16 8.4418 15.6416 8.8002 15.2 8.8002Z"
            fill="white"
          />
          <path
            d="M7.99995 16C7.55835 16 7.19995 15.6416 7.19995 15.2V0.8C7.19995 0.3584 7.55835 0 7.99995 0C8.44155 0 8.79995 0.3584 8.79995 0.8V15.2C8.79995 15.6416 8.44155 16 7.99995 16Z"
            fill="white"
          />
        </svg>
        <p class="text-white ms-2">Add Staff</p>
      </div>

      <!-- Modal -->
    </div>

    <div class="table-responsive mt-3 text-nowrap" v-if="loaded">
      <table class="table">
        <thead>
          <tr>
            <th class="thead text-primary bg-primary-light">FIRST NAME</th>
            <th class="thead text-primary bg-primary-light">LAST NAME</th>

            <th class="thead text-primary bg-primary-light">EMAIL ADDRESS</th>
            <th class="thead text-primary bg-primary-light">STATUS</th>
            <th class="thead text-primary bg-primary-light">DATE ADD</th>
            <th class="thead text-primary bg-primary-light">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, index) in staffs" :key="index">
            <td>{{ staff.firstname }}</td>
            <td>{{ staff.lastname }}</td>

            <td>{{ staff.email }}</td>
            <td>
              <span class="active"> Active </span>
              <!-- <span class="deactive"> Deactivated </span> -->
            </td>
            <td>{{ formatDate(staff.createdAt) }}</td>
            <td class="action-icon">
              <router-link :to="`/each-staff/${staff._id}`">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
                    stroke="#343434"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48885 15.806 4.75085 11.998 4.75085H12.002C8.194 4.75085 4.711 7.48885 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
                    stroke="#343434"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header mb-3 border-0"></div>
        <div class="modal-body">
          <div class="text-center invite-text">
            <h5 class="modal-title" id="staticBackdropLabel ">Add Staff</h5>
          </div>

          <div class="modal-times">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form action="">
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="name" class="mb-2">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter first name"
                    v-model="staff.firstname"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="name" class="mb-2">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter first name and last name"
                    v-model="staff.lastname"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="name" class="mb-2">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Email address"
                    v-model="staff.email"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="name" class="mb-2">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter phone number"
                    v-model="staff.phone_number"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="email" class="mb-2">Home Address</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter home address"
                    v-model="staff.home_address"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label for="city" class="mb-2">City</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    id="city"
                    placeholder="Enter city"
                    v-model="staff.city"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="col-12">
              <div class="mb-4">
                <label for="name" class="mb-2">Password</label>
                <input
                  type="password"
                  class="form-control"
                  style="height: 45px"
                  placeholder="Enter password"
                  v-model="staff.password"
                />
              </div>
            </div> -->

            <div class="my-5">
              <button
                @click.prevent="addStaff()"
                class="btn rounded-pill form-control btn-primary text-white"
                style="height: 45px"
                :disabled="loading"
              >
                {{ loading ? "Loading..." : "Add Staff" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { formatDate } from "@/core/utils/helpers";

  const store = useStore();
  const staff = ref({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    pre_phone_number: 234,
    home_address: "",
    city: "",
    password: "",
    supermarket_id: store.state.user.supermarket_id,
  });
  const loading = ref(false);
  const search = ref("");
  const staffs: any = ref([]);
  const loaded = ref(false);

  const addStaff = () => {
    store.commit("setLoader", true);
    store
      .dispatch("post", {
        endpoint: "organization/staff",
        details: staff.value,
      })
      .then((resp) => {
        window.setTimeout(() => {
          window.location.reload();
        }, 1500);
        console.log(resp);
      })
      .catch(() => {
        store.commit("setLoader", false);
      });
  };

  const getStaff = () => {
    store.commit("setLoader", true);
    store
      .dispatch(
        "get",
        `organization/search?limit=10&role=STAFF&search=${search.value}`
      )
      .then((resp) => {
        console.log(resp);
        store.commit("setLoader", false);
        staffs.value = resp.data.data.data;
        loaded.value = true;
      });
  };

  onMounted(() => {
    getStaff();
  });
</script>

<style lang="scss">
  .invite-text {
    position: relative;
    margin-bottom: 23px;
  }

  .btn-close {
    position: absolute;
    right: 20px;
    top: -29px;
  }
  @media only screen and (max-width: 438px) {
    .main-page .main-content .search-nav {
      display: flex;
    }
    .main-page .main-content .search-nav .search-input {
      margin-bottom: 0;
    }
  }
</style>
