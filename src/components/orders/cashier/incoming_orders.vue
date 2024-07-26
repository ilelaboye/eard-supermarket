<template>
  <div class="main-content" v-if="loaded">
    <!--search nav starts-->
    <div class="search-nav">
      <div class="search-input">
        <form @submit.prevent="getOrders()">
          <input
            type="search"
            class="input-field form-control ps-5"
            placeholder="Search by Order ID"
            v-model="search"
          />
          <div class="search-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click.prevent="getOrders()"
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
        </form>
      </div>

      <!-- <div class="filter px-3">
        <div class="filter-icon">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.54345 2C2.96738 2 2.5 2.47524 2.5 3.06027V3.6843C2.5 4.11765 2.66479 4.53439 2.95957 4.84785L6.19007 8.28288L6.19149 8.28072C6.81514 8.91919 7.16604 9.78228 7.16604 10.6822V13.7301C7.16604 13.9338 7.37913 14.0638 7.556 13.9677L9.3957 12.9653C9.67343 12.8136 9.84675 12.5189 9.84675 12.1989V10.6743C9.84675 9.77939 10.1927 8.91991 10.8106 8.28288L14.0411 4.84785C14.3352 4.53439 14.5 4.11765 14.5 3.6843V3.06027C14.5 2.47524 14.0333 2 13.4573 2H3.54345Z"
              stroke="#343434"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="filter-text">Filter by</div>
        <div class="dropdown-icon">
          <svg
            width="24"
            height="24"
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
      </div> -->
    </div>
    <!--search nav ends-->

    <!--table starts-->
    <div class="table-responsive mt-3 text-nowrap">
      <table class="table">
        <thead>
          <tr>
            <th class="thead text-primary bg-primary-light">DATE AND TIME</th>
            <th class="thead text-primary bg-primary-light text-left">
              CUSTOMER
            </th>
            <th class="thead text-primary bg-primary-light text-center">
              NUMBER OF ITEMS
            </th>
            <th class="thead text-primary bg-primary-light text-center">
              <p class="text-primary">AMOUNT</p>
              <span class="text-primary">(₦)</span>
            </th>
            <!-- <th class="thead text-primary bg-primary-light">PAYMENT OPTION</th> -->
            <th class="thead text-primary bg-primary-light">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ formatDateTime(order.createdAt) }}</td>
            <td>{{ order.user_id.fullname }}</td>
            <td class="text-center">{{ order.order.length }}</td>
            <td class="text-right">
              {{ formatPrice(calculateTotal(order.order)) }}
            </td>
            <!-- <td>Bank Transfer</td> -->
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
      </table>
    </div>

    <!--table ends-->

    <!--search nav and table ends-->
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { formatDateTime, formatPrice } from "@/core/utils/helpers";

  const store = useStore();
  const orders: any = ref([]);
  const loaded = ref(false);
  const search: any = ref("");

  const getOrders = (refresh = false) => {
    if (refresh) {
      store.commit("setLoader", true);
    }

    store
      .dispatch(
        "get",
        `order/incoming?supermarket_id=${store.state.user.supermarket_id._id}&limit=10&search=${search.value}`
      )
      .then((resp) => {
        loaded.value = true;
        orders.value = resp.data.data.data;
        store.commit("setLoader", false);
      })
      .catch(() => {
        store.commit("setLoader", false);
      });
  };

  const calculateTotal = (order: any) => {
    var total = 0;
    order.forEach((item: any) => {
      total += item.amount * item.qty;
    });
    return total;
  };

  onMounted(() => {
    getOrders(true);
    // get fresh data every 10 seconds
    window.setInterval(() => {
      getOrders();
    }, 10000);
  });
</script>

<style lang="scss" scoped></style>
