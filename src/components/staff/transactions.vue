<template>
  <div class="main-content">
    <!--search nav starts-->
    <transactionNav></transactionNav>
    <!--search nav ends-->
  </div>

  <div class="cards my-3 p-4 bg-white" v-if="loaded">
    <div class="row">
      <div class="col-lg-5 col-md-5">
        <div class="each-card border mb-3 rounded px-4 py-3">
          <div class="value d-flex align-items-center">
            <div
              class="value-icon me-2 bg-success rounded-circle d-flex justify-content-center align-items-center"
              style="height: 50px; width: 50px"
            >
              <svg
                width="15"
                height="17"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.496 13V8.631H0.17V7.543H1.496V6.149H0.17V5.061H1.496V0.861999H3.264L4.879 5.061H6.885V0.861999H8.228V5.061H9.554V6.149H8.228V7.543H9.554V8.631H8.228V13H6.443L4.828 8.631H2.822V13H1.496ZM2.822 7.543H4.42L3.91 6.149H2.788L2.822 7.543ZM6.885 10.603H6.953L6.902 8.631H6.188L6.885 10.603ZM2.788 5.061H3.502L2.788 2.953H2.72L2.788 5.061ZM5.78 7.543H6.919L6.885 6.149H5.27L5.78 7.543Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="value-text">
              <p>Total Transactions in Value</p>
            </div>
          </div>
          <p class="my-3 total-numb fs-4">NGN 5,609,190</p>
        </div>
      </div>

      <div class="col-lg-5 col-md-5 mb-3">
        <div class="each-card border rounded px-4 py-3 mb-3">
          <div class="value d-flex align-items-center">
            <div
              class="value-icon me-2 bg-info rounded-circle d-flex justify-content-center align-items-center"
              style="height: 50px; width: 50px"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.44987 8.92627V14.9289"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5334 6.0542V14.9291"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.55 12.0986V14.9293"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6 1.75H6.4C3.54167 1.75 1.75 3.77307 1.75 6.63701V14.363C1.75 17.2269 3.53333 19.25 6.4 19.25H14.6C17.4667 19.25 19.25 17.2269 19.25 14.363V6.63701C19.25 3.77307 17.4667 1.75 14.6 1.75Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="value-text">
              <p>Total Transactions in Volume</p>
            </div>
          </div>
          <p class="my-3 total-numb fs-4">50,678</p>
        </div>
      </div>
    </div>
  </div>

  <!--table starts-->
  <Completed_table></Completed_table>
  <!--table ends-->
</template>

<script lang="ts" setup>
  import transactionNav from "@/components/search-nav/transaction-nav.vue";

  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";

  const store = useStore();
  const route = useRoute();
  const transactions: any = ref({});
  const loaded = ref(false);

  const getTransactions = () => {
    store.commit("setLoader", true);
    store
      .dispatch("get", `order/transactions/cashier/${route.params.id}`)
      .then((resp) => {
        console.log(resp);
        loaded.value = true;
        transactions.value = resp.data.data.data;
        store.commit("setLoader", false);
      })
      .catch(() => {
        store.commit("setLoader", false);
      });
  };

  onMounted(() => {
    getTransactions();
  });
</script>
