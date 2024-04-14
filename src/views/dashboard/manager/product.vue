<template>
   <div class="main-content">
  
    <!--search nav starts-->
    <search_nav></search_nav>
    <!--search nav ends-->

    <!--table starts-->
    <product_table></product_table>
    <!--table ends-->


    <div class="footer my-3 bg-white d-flex justify-content-between align-items-center">
      <div class="records d-flex align-items-center">
        <div class="view-records px-3 me-3">
          <div class="record-text">30</div>
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
        <p>Showing 30 of 150 records</p>

      </div>

      <div class="numbers">
        <button type="button" class="btn bg-primary-light text-primary fs-6 me-2" style="height: 40px; width:70px">
          Prev
        </button>
        <button type="button" class="btn bg-primary text-white me-2 fs-6" style="height: 40px; width:40px">
          1
        </button>
        <button type="button" class="btn border rounded me-2 fs-6" style="height: 40px; width:40px">
          2
        </button>
        <button type="button" class="btn border rounded me-2 fs-6" style="height: 40px; width:40px">
          3
        </button>
        <button type="button" class="btn border rounded me-2 fs-6" style="height: 40px; width:40px">
          4
        </button>
        <button type="button" class="btn border rounded me-2 fs-6" style="height: 40px; width:40px">
          5
        </button>
        <button type="button" class="btn bg-primary text-white fs-6 me-2" style="height: 40px; width:70px">
          Next
        </button>
      </div>
    </div>
  </div> 
  
  
</template>

<script  setup>

import search_nav from '@/components/search-nav/product-nav.vue'

import product_table from '@/components/tables/product_table.vue'
</script>