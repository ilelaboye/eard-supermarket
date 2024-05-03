<template>
  <div class="search-nav">
    <div class="search-input">
      <input
        type="search"
        class="input-field form-control ps-5"
        placeholder="Search by Order ID"
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
    <div class="dropdowns d-flex">
      <div class="dropdown">
        <button
          class="btn dropdown bg-white border d-flex justify-content-evenly align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          This week
          <div class="dropdown-icon">
            <svg
              width="18"
              height="18"
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
        </button>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">This week</a></li>
          <li><a class="dropdown-item" href="#">This month</a></li>
          <li><a class="dropdown-item" href="#">This year</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
