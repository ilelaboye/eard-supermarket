<template>
  <div class="payment-comfirm bg-white">
    <div class="personl-details">
      <div class="headline">
        <p class="text-primary bg-primary-light p-2">PERSONAL DETAILS</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="staff-details p-3">
            <div class="row mb-4">
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">FIRST NAME</p>
                <p class="mb-3 fw-600">{{ staff.firstname }}</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">LAST NAME</p>
                <p class="mb-3 fw-600">{{ staff.lastname }}</p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">EMAIL ADDRESS</p>
                <p class="mb-3 fw-600">{{ staff.email }}</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">PHONE NUMBER</p>
                <p class="mb-3 fw-600">
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M28.5001 19H19V0H28.5001V19Z" fill="#27AE60" />
                    <path d="M19 19H9.5V0H19V19Z" fill="white" />
                    <path d="M9.5 19H0V0H9.5V19Z" fill="#27AE60" />
                  </svg>

                  {{ staff.pre_phone_number }}{{ staff.phone_number }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="personl-details">
      <div class="headline">
        <p class="text-primary bg-primary-light p-2">PERSONAL DETAILS</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="staff-details p-3">
            <div class="row mb-3">
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">Address</p>
                <p class="mb-3 fw-600">{{ staff.home_address }}</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">CITY</p>
                <p class="mb-3 fw-600">{{ staff.city }}</p>
              </div>

              
            </div>

            <div class="row mb-4">
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">STATE</p>
                <p class="mb-3 fw-600">{{ staff.state }}</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 gy-2">
                <p class="mb-3 fw-lighter">COUNTRY</p>
                <p class="mb-3 fw-600">Nigeria</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--table ends-->

    <!--search nav and table ends-->
  </div>
</template>
<script setup lang="ts">
  const prop = defineProps<{ staff: any }>();
</script>
