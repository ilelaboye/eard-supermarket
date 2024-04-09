<template>
  <div class="main-content">
    <!--search nav starts-->
    <div class="search-nav">
      <div class="search-input">
        <input
          type="search"
          class="input-field form-control ps-5"
          style="width: 280px; height: 47px"
          placeholder="Search by Customer ID, Order ID"
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
      <div class="filter px-3">
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
      </div>
    </div>
    <!--search nav ends-->

    <!--table starts-->
    <Completed_table></Completed_table>
    <!--table ends-->

    <!--search nav and table ends-->
  </div>
</template>

<script lang="ts" setup>

import Completed_table from '@/components/tables/completed-table.vue'


</script>


<style lang="scss">
  .main-content {
    padding: 20px;
    
  }
</style>
