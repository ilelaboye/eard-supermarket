<template>
  <div class="main-content">
    <!--search nav and table starts-->
    <!--search nav starts-->
    <product_nav></product_nav>
    <!--search nav ends-->

    <!--table starts-->
    <product_table></product_table>
    <!--table ends-->

    <!--search nav and table ends-->
  </div>     
</template>

<script  setup >

import product_nav from '@/components/search-nav/product-nav.vue'

import product_table from '@/components/tables/product_table.vue'

</script>

<style lang="scss" scoped>
  .main-content {
    
    

    .table {
      tr {
        .out-of-stock {
          background: #fff2f2;
          color: #d22424;
          padding: 5px 10px;
          border-radius: 14px;
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }
</style>
