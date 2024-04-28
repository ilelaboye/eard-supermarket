<template>
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
            <router-link to="/each-staff">
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

  <!--table ends-->
</template>
<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { formatDate } from "@/core/utils/helpers";

  const store = useStore();
  const search = ref("");
  const staffs: any = ref([]);
  const loaded = ref(false);

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
<style scoped>
  .table tr th {
    padding: 14px;
  }
</style>
