<template>
  <div class="main-content">
    <!--search nav starts-->
    <transactionNav></transactionNav>
    <!--search nav ends-->
  </div>

  <div class="cards my-3 p-4 bg-white">
    <div class="row">
      <div class="col-lg-5 col-md-5 mb-3">
        <div class="each-card border rounded px-4 py-3 ">
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
          <p class="my-3 total-numb fs-4">NGN 205,609,190</p>

          <div class="update d-flex align-items-center">
            <div class="d-flex me-2 bg-success-light p-2 mb-2 rounded-pill update-text">
              <div class="update-icon pe-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.82656 7.59217L3.37552 7.37637L3.37552 7.37637L3.82656 7.59217ZM5.39696 7.2799L5.06279 7.65183L5.06279 7.65183L5.39696 7.2799ZM9.15239 10.654L8.81822 11.026L8.81822 11.026L9.15239 10.654ZM10.7479 10.2848L11.2115 10.4722L11.2115 10.4722L10.7479 10.2848ZM14.9603 0.804669C14.8524 0.550471 14.5589 0.431855 14.3047 0.539733L10.1623 2.29772C9.90807 2.40559 9.78945 2.69912 9.89733 2.95331C10.0052 3.20751 10.2987 3.32613 10.5529 3.21825L14.2351 1.6556L15.7977 5.33773C15.9056 5.59193 16.1991 5.71055 16.4533 5.60267C16.7075 5.49479 16.8261 5.20127 16.7182 4.94707L14.9603 0.804669ZM1.45104 13.7158L4.27759 7.80796L3.37552 7.37637L0.548965 13.2842L1.45104 13.7158ZM5.06279 7.65183L8.81822 11.026L9.48656 10.2821L5.73113 6.90797L5.06279 7.65183ZM11.2115 10.4722L14.9636 1.18734L14.0364 0.812663L10.2843 10.0975L11.2115 10.4722ZM8.81822 11.026C9.59214 11.7213 10.8216 11.4368 11.2115 10.4722L10.2843 10.0975C10.1544 10.419 9.74453 10.5139 9.48656 10.2821L8.81822 11.026ZM4.27759 7.80796C4.42163 7.50691 4.81454 7.42878 5.06279 7.65183L5.73113 6.90797C4.98638 6.23883 3.80763 6.47322 3.37552 7.37637L4.27759 7.80796Z"
                    fill="#27AE60"
                  />
                </svg>
              </div>
              <p class="bg-sucess-light text-success">+3.32 than last week</p>
            </div>

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
          <p class=" my-3 total-numb fs-4">450,678</p>

          <div class="update d-flex align-items-center">
            <div class="d-flex me-2 bg-success-light p-2 mb-2 rounded-pill update-text">
              <div class="update-icon pe-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.82656 7.59217L3.37552 7.37637L3.37552 7.37637L3.82656 7.59217ZM5.39696 7.2799L5.06279 7.65183L5.06279 7.65183L5.39696 7.2799ZM9.15239 10.654L8.81822 11.026L8.81822 11.026L9.15239 10.654ZM10.7479 10.2848L11.2115 10.4722L11.2115 10.4722L10.7479 10.2848ZM14.9603 0.804669C14.8524 0.550471 14.5589 0.431855 14.3047 0.539733L10.1623 2.29772C9.90807 2.40559 9.78945 2.69912 9.89733 2.95331C10.0052 3.20751 10.2987 3.32613 10.5529 3.21825L14.2351 1.6556L15.7977 5.33773C15.9056 5.59193 16.1991 5.71055 16.4533 5.60267C16.7075 5.49479 16.8261 5.20127 16.7182 4.94707L14.9603 0.804669ZM1.45104 13.7158L4.27759 7.80796L3.37552 7.37637L0.548965 13.2842L1.45104 13.7158ZM5.06279 7.65183L8.81822 11.026L9.48656 10.2821L5.73113 6.90797L5.06279 7.65183ZM11.2115 10.4722L14.9636 1.18734L14.0364 0.812663L10.2843 10.0975L11.2115 10.4722ZM8.81822 11.026C9.59214 11.7213 10.8216 11.4368 11.2115 10.4722L10.2843 10.0975C10.1544 10.419 9.74453 10.5139 9.48656 10.2821L8.81822 11.026ZM4.27759 7.80796C4.42163 7.50691 4.81454 7.42878 5.06279 7.65183L5.73113 6.90797C4.98638 6.23883 3.80763 6.47322 3.37552 7.37637L4.27759 7.80796Z"
                    fill="#27AE60"
                  />
                </svg>
              </div>
              <p class="bg-sucess-light text-success">+3.32 than last week</p>
            </div>

            <span>Updated 30 seconds ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>

   <!--table starts-->
   <Completed_table></Completed_table>
    <!--table ends-->
</template>

<script lang="ts" setup>
import transactionNav from '@/components/search-nav/transaction-nav.vue';
import Completed_table from '@/components/tables/completed-table.vue'
</script>

<style lang="scss" scoped></style>







