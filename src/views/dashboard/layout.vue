<template>
  <div class="layout-wrapper d-flex">
    <!--Sidebar starts-->
    <div class="sidebar-wrapper">
      <div class="sidebar-brand">
        <div class="brand-logo">
          <img src="@/assets/images/logo.png" alt="" />
          <span class="text-primary ms-3 fw-bold">CASHIER PORTAL</span>
        </div>
      </div>

      <div class="list-items">
        <ul class="nav-list">
          <li class="each-item">
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
          </li>
          <li class="each-item">
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
          </li>
          <li class="each-item">
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
          </li>
        </ul>
      </div>
    </div>
    <!--Sidebar ends-->
    <div class="main-page">
      <!--navbar starts-->
      <div class="navbar-wrapper">
        <div class="navbar-items">
          <div class="nav-text">
            <p class="fs-5">Orders</p>
          </div>
          <div class="nav-profile">
            <div class="initials">
              <h5 class="initials-text">AB</h5>
            </div>
            <div class="profile-name">
              <h6>Abike Balogun</h6>
              <span>Cashier</span>
            </div>
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
      </div>
      <!--navbar ends-->

      <div class="hero-page">
        <!--buttton nav starts-->
        <div class="button-nav-wrapper ps-3">
          <div class="incoming rounded-pill">
            <button class="btn text-white" type="button">
              Incoming Orders
            </button>
          </div>
          <div class="complete">
            <button class="btn" type="button">Complete Orders</button>
          </div>
        </div>
        <!--buttton nav ends-->

        <!--search  nav and table starts-->
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
          <div class="table-responsive mt-3">
            <table class="table">
              <tr>
                <th class="thead text-primary bg-primary-light">
                  DATE AND TIME
                </th>
                <th class="thead text-primary bg-primary-light">
                  ORDER IN NUMBER
                </th>
                <th class="thead text-primary bg-primary-light">
                  ITEM NUMBERS
                </th>
                <th class="thead text-primary bg-primary-light">AMOUNT</th>
                <th class="thead text-primary bg-primary-light">
                  PAYMENT OPTION
                </th>
                <th class="thead text-primary bg-primary-light">ACTION</th>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>

              <tr>
                <td>12-02-2024 02:34PM</td>
                <td>#25661C980790</td>
                <td>24 Items</td>
                <td>#64,300</td>
                <td>Bank Transfer</td>
                <td class="action-icon">
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
                </td>
              </tr>
            </table>
          </div>

          <!--table ends-->

          <!--search nav and table ends-->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  min-height: 100vh;
  width: 100%;
  background: rgba(247, 247, 247, 0.959);
}
.hero-page {
  padding: 13px;
  .button-nav-wrapper {
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 13px;

    .incoming {
      background: #251b6c;
    }
  }
  .main-content {
    padding: 20px;
    background: #fff;
    height: 100%;
    width: 100%;

    .search-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .search-input {
        position: relative;

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          width: 60px;
        }
      }
      .filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        width: 150px;
        background: #eeeeee;
        border-radius: 7px;
      }
    }
  }
}

.navbar-wrapper {
  width: calc(100vw - 280px);
  height: 80px;
  background: white;
  padding: 10px 23px;

  .navbar-items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-profile {
      background-color: #f5f4ff;
      padding: 15px;
      width: 265px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 30px;

      .initials {
        height: 45px;
        width: 45px;
        background-color: #251b6c;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .initials-text {
          color: #fff;
        }
      }
    }
  }
}

.sidebar-wrapper {
  padding: 20px;
  width: 280px;
  height: 100vh;
  background: white;

  .sidebar-brand {
    height: 80px;
    width: 100%;
    border-bottom: 2px solid rgb(236, 234, 234);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-items {
    width: 100%;
    padding-top: 30px;
    .nav-list {
      .each-item {
        padding: 10px 30px;
        height: 45px;
        margin-bottom: 20px;
        color: #6d6d6d !important;

        span {
          margin-left: 15px;
          color: #6d6d6d;
        }
      }
    }
    .each-item:hover {
      background: #f5f4ff;
      border-left: 4px solid #251b6c;
      border-radius: 5px;
      font-weight: 700;

      .icon {
        color: #251b6c;
      }

      span {
        color: #251b6c;
      }
    }
  }
}
</style>
