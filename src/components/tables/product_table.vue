<template>
  <!--table starts-->
  <div class="search-nav">
    <div class="search-input">
      <form @submit.prevent="getProducts()">
        <input
          type="search"
          class="input-field form-control ps-5"
          placeholder="Search Product"
          v-model="search"
        />
        <div class="search-icon" @click="getProducts()">
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
      </form>
    </div>
  </div>
  <div class="table-responsive mt-3 text-nowrap" v-if="loaded">
    <table class="table">
      <thead>
        <tr>
          <th class="thead text-primary bg-primary-light"></th>
          <th class="thead text-primary bg-primary-light">PRODUCT ID</th>
          <th class="thead text-primary bg-primary-light">PRODUCT NAME</th>

          <th class="thead text-primary bg-primary-light">QUANTITY IN STOCK</th>
          <th class="thead text-primary bg-primary-light">UNIT PRICE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, index) in products" :key="index">
          <td>
            <div class="prod-img">
              <img :src="prod.image" class="w-100 h-100" />
            </div>
          </td>
          <td>#{{ prod.id }}</td>
          <td>{{ prod.name }}</td>

          <td>{{ prod.qty }} Item{{ prod.qty > 1 ? "s" : "" }}</td>
          <td>#{{ formatPrice(prod.amount) }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!--table ends-->
</template>
<script setup lang="ts">
  import product_nav from "@/components/search-nav/product-nav.vue";
  import { onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import { formatPrice } from "@/core/utils/helpers";

  const store = useStore();
  const products: any = ref([]);
  const loaded = ref(false);
  const search = ref("");

  const getProducts = () => {
    store.commit("setLoader", true);
    store
      .dispatch("get", `order/product?search=${search.value}`)
      .then((resp) => {
        store.commit("setLoader", false);
        console.log(resp);
        products.value = resp.data.data.data;
        loaded.value = true;
      });
  };

  onMounted(() => {
    getProducts();
  });
</script>
<style scoped lang="scss">
  .prod-img {
    width: 40px;
    height: 40px;
    img {
      object-fit: contain;
    }
  }
</style>
