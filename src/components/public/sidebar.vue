<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-brand">
      <div class="brand-logo">
        <img src="@/assets/images/logo.png" alt="" />
        <span class="text-primary ms-3 fw-bold">CASHIER PORTAL</span>
      </div>
    </div>

    <div class="list-wrapper">
      <ul class="nav-items">
        <li class="each-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Orders' }"
            :class="{ active: $route.name === 'Orders' }"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.875 6.22917C2.875 3.71334 2.90194 2.875 6.22917 2.875C9.5564 2.875 9.58333 3.71334 9.58333 6.22917C9.58333 8.745 9.59394 9.58333 6.22917 9.58333C2.86439 9.58333 2.875 8.745 2.875 6.22917Z"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4165 6.22917C13.4165 3.71334 13.4434 2.875 16.7707 2.875C20.0979 2.875 20.1248 3.71334 20.1248 6.22917C20.1248 8.745 20.1354 9.58333 16.7707 9.58333C13.4059 9.58333 13.4165 8.745 13.4165 6.22917Z"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.875 16.7708C2.875 14.255 2.90194 13.4166 6.22917 13.4166C9.5564 13.4166 9.58333 14.255 9.58333 16.7708C9.58333 19.2866 9.59394 20.125 6.22917 20.125C2.86439 20.125 2.875 19.2866 2.875 16.7708Z"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4165 16.7708C13.4165 14.255 13.4434 13.4166 16.7707 13.4166C20.0979 13.4166 20.1248 14.255 20.1248 16.7708C20.1248 19.2866 20.1354 20.125 16.7707 20.125C13.4059 20.125 13.4165 19.2866 13.4165 16.7708Z"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span> Orders</span>
          </router-link>
        </li>
        <li class="each-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Product' }"
            :class="{ active: $route.name === 'Product' }"
          >
          <svg
            class="icon"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4953 15.982V13.5507"
              stroke="#6D6D6D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.4319 5.10815C19.0515 5.10815 20.3548 6.42107 20.3548 8.04065V11.3373C17.9973 12.7173 14.8828 13.5511 11.4903 13.5511C8.09775 13.5511 4.99275 12.7173 2.63525 11.3373V8.03107C2.63525 6.41149 3.94817 5.10815 5.56775 5.10815H17.4319Z"
              stroke="#6D6D6D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8494 5.10392V4.75317C14.8494 3.584 13.9007 2.63525 12.7315 2.63525H10.259C9.08986 2.63525 8.14111 3.584 8.14111 4.75317V5.10392"
              stroke="#6D6D6D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.65869 14.8379L2.83982 17.2423C2.96248 18.8629 4.31277 20.1154 5.93715 20.1154H17.0529C18.6772 20.1154 20.0275 18.8629 20.1502 17.2423L20.3313 14.8379"
              stroke="#6D6D6D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Product/Inventory</span>
          </router-link>
        </li>
        <li class="each-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Profile' }"
            :class="{ active: $route.name === 'Profile' }"
          >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4855 14.7068C7.77901 14.7068 4.61377 15.2672 4.61377 17.5115C4.61377 19.7558 7.75893 20.3363 11.4855 20.3363C15.1919 20.3363 18.3563 19.775 18.3563 17.5316C18.3563 15.2882 15.212 14.7068 11.4855 14.7068Z"
              stroke="#6D6D6D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4853 11.5057C13.9176 11.5057 15.889 9.53338 15.889 7.10104C15.889 4.66869 13.9176 2.69727 11.4853 2.69727C9.05293 2.69727 7.08059 4.66869 7.08059 7.10104C7.07238 9.52516 9.03103 11.4975 11.4542 11.5057H11.4853Z"
              stroke="#6D6D6D"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span> Profile </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sidebar-wrapper {
  padding: 20px;
  width: 280px;
  min-height: 100vh;
  background: white;

  .sidebar-brand {
    height: 80px;
    width: 100%;
    border-bottom: 2px solid rgb(236, 234, 234);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-wrapper {
    width: 100%;
    padding-top: 30px;
    .nav-items {
      padding: 0;
      .each-item {
        list-style: none;
        width: 100%;
        .nav-link {
          padding: 10px 15px;
          height: 45px;
          margin-bottom: 20px;
          color: #6d6d6d !important;

          span {
            margin-left: 15px;
            color: #6d6d6d;
          }
        }
        .active {
          background: #f5f4ff;
          border-left: 4px solid #251b6c;
          border-radius: 5px;
          font-weight: 700;
          width: 100%;

          span {
            color: #251b6c;
          }
          
        }
      }
    }
  }
}
</style>
