<template>
  <div class="main-content">
    <!--table starts-->
    <product_table></product_table>
    <!--table ends-->

    <!--search nav and table ends-->
  </div>
</template>

<script lang="ts" setup>
  import product_table from "@/components/tables/product_table.vue";
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
