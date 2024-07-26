<template>
  <div v-if="loaded">
    <div class="main-content">
      <!--search nav starts-->
      <div class="search-nav">
        <div class="search-input">
          <input
            type="search"
            class="input-field form-control ps-5"
            placeholder="Search by Order"
          />
          <div class="search-icon">
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
        <div class="dropdowns d-flex">
          <div class="dropdown">
            <button
              class="btn dropdown bg-white border d-flex justify-content-evenly align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              This week
              <div class="dropdown-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 8.5L12 15.5L5 8.5"
                    stroke="#14213C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">This week</a></li>
              <li><a class="dropdown-item" href="#">This month</a></li>
              <li><a class="dropdown-item" href="#">This year</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--search nav ends-->
    </div>

    <div class="cards my-3 p-4 bg-white">
      <div class="row">
        <div class="col-lg-5 col-md-5 mb-3">
          <div class="each-card border rounded px-4 py-3">
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
            <p class="my-3 total-numb fs-4">
              NGN {{ formatPrice(kpi.total_order_amount) }}
            </p>
            <div class="update d-flex align-items-center">
              <span>Updated 30 seconds ago</span>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-5 mb-3">
          <div class="each-card border rounded px-4 py-3">
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
              <div class="valutotal-numbe-text">
                <p>Total Transactions in Volume</p>
              </div>
            </div>
            <p class="my-3 total-numb fs-4">{{ kpi.orders }}</p>

            <div class="update d-flex align-items-center">
              <span>Updated 30 seconds ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--table starts-->
    <div class="bg-white p-3">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-primary" @click="exportTransactions()">
          Export
        </button>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="thead text-primary bg-primary-light">DATE AND TIME</th>
              <th class="thead text-primary bg-primary-light">ORDER NUMBER</th>
              <th class="thead text-primary bg-primary-light text-center">
                NUMBER OF ITEMS
              </th>
              <th class="thead text-primary bg-primary-light text-center">
                AMOUNT
                <p class="mb-0 text-center text-primary">(₦)</p>
              </th>
              <th class="thead text-primary bg-primary-light">CASHIER</th>
              <th class="thead text-primary bg-primary-light">
                PAYMENT OPTION
              </th>
              <th class="thead text-primary bg-primary-light">STATUS</th>
              <th class="thead text-primary bg-primary-light">ACTION</th>
            </tr>
          </thead>
          <tbody v-if="orders.length > 0">
            <tr v-for="(order, index) in orders" :key="index">
              <td>{{ formatDateTime(order.createdAt) }}</td>
              <td>{{ order._id }}</td>
              <td class="text-center">{{ order.order.length }}</td>
              <td class="text-right">
                {{ formatPrice(calculateTotal(order.order)) }}
              </td>
              <td>
                {{ order.cashier.firstname }} {{ order.cashier.lastname }}
              </td>
              <td>
                <span v-if="order.payment == 1">Cash</span>
                <span v-if="order.payment == 2">POS</span>
                <span v-if="order.payment == 3">Transfer</span>
              </td>
              <td>
                <div class="status" v-if="order.status == 1">
                  <div class="circle bg-danger"></div>
                  <div class="text text-danger">Pending</div>
                </div>
                <div class="status" v-else>
                  <div class="circle"></div>
                  <div class="text">Paid</div>
                </div>
              </td>
              <td class="action-icon">
                <router-link :to="`/order/${order._id}`">
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
          <tbody v-else>
            <tr>
              <td colspan="7">
                <p class="alert alert-primary">No transaction available</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav class="my-3">
        <ul class="pagination justify-content-end">
          <li class="page-item me-2">
            <span class="page-link text-dark bg-primary-light" v-if="page > 1"
              >Prev</span
            >
          </li>

          <li
            class="page-item active me-2"
            v-for="(item, index) in pageCount"
            :key="index"
          >
            <span
              class="page-link me-2"
              :class="page == item ? 'bg-primary' : 'text-gray'"
            >
              {{ item }}
              <!-- <span class="sr-only">(current)</span> -->
            </span>
          </li>
          <!-- <li class="page-item me-2">
            <a class="page-link text-gray" href="#">2</a>
          </li>
          <li class="page-item me-2">
            <a class="page-link text-gray" href="#">3</a>
          </li>
          <li class="page-item me-2">
            <a class="page-link text-gray" href="#">4</a>
          </li>
          <li class="page-item me-2">
            <a class="page-link text-gray" href="#">5</a>
          </li> -->
          <li class="page-item me-2" v-if="pageCount > 1">
            <a class="page-link text-white bg-primary" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!--table ends-->
</template>

<script lang="ts" setup>
  import transactionNav from "@/components/search-nav/transaction-nav.vue";

  import { useStore } from "vuex";
  import { onMounted, ref } from "vue";

  import { formatDateTime, formatPrice } from "@/core/utils/helpers";

  const store = useStore();
  const orders: any = ref([]);
  const search: any = ref("");
  const loaded = ref(false);
  const kpi: any = ref({});
  const pageCount = ref(1);
  const page = ref(1);

  const calculateTotal = (order: any) => {
    var total = 0;
    order.forEach((item: any) => {
      total += item.amount * item.qty;
    });
    return total;
  };

  const exportTransactions = () => {
    window.location.href = `${process.env.VUE_APP_BASE_URL}order/export/transactions/manager/${store.state.user.supermarket_id._id}`;
    store.commit("setLoader", false);
  };

  const getOrders = () => {
    store.commit("setLoader", true);
    // ${store.state.user._id}
    store
      .dispatch(
        "get",
        `order/transactions/manager/${store.state.user.supermarket_id._id}`
      )
      .then((resp) => {
        store.commit("setLoader", false);
        console.log(resp);
        orders.value = resp.data.data.data;
        pageCount.value = resp.data.data.count;
        loaded.value = true;
      });
  };

  const getSupermarketKpi = () => {
    store
      .dispatch("get", `supermarket/kpi/${store.state.user.supermarket_id._id}`)
      .then((resp) => {
        kpi.value = resp.data.data.data;
        loaded.value = true;
      });
  };

  onMounted(() => {
    getOrders();
    getSupermarketKpi();
  });
</script>

<style lang="scss" scoped></style>
