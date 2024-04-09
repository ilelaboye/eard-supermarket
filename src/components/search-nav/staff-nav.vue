<template>
  <div class="main-content">
    <div class="search-nav">
      <div class="search-input">
        <input
          type="search"
          class="input-field form-control ps-5"
          style="width: 280px; height: 47px"
          placeholder="Search by Product ID"
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

      <!-- Button trigger modal -->
      <div
        class="button btn btn-primary rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2 8.8002H0.8C0.3584 8.8002 0 8.4418 0 8.0002C0 7.5586 0.3584 7.2002 0.8 7.2002H15.2C15.6416 7.2002 16 7.5586 16 8.0002C16 8.4418 15.6416 8.8002 15.2 8.8002Z"
            fill="white"
          />
          <path
            d="M7.99995 16C7.55835 16 7.19995 15.6416 7.19995 15.2V0.8C7.19995 0.3584 7.55835 0 7.99995 0C8.44155 0 8.79995 0.3584 8.79995 0.8V15.2C8.79995 15.6416 8.44155 16 7.99995 16Z"
            fill="white"
          />
        </svg>
        <p class="text-white fs-6">Add Staff</p>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header mb-3 border-0"></div>
            <div class="modal-body">
              <div class="text-center invite-text">
                <h5 class="modal-title" id="staticBackdropLabel ">
                  Invite Staff
                </h5>
              </div>

              <div >
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <form action="">
                <div class="mb-4">
                  <label for="name" class="mb-2">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter first name and last name"
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="mb-2">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    style="height: 45px"
                    placeholder="Enter your email address"
                  />
                </div>

                <div class="my-5">
                  <button
                    type="submit"
                    class="btn rounded-pill form-control btn-primary text-white"
                    style="height: 45px"
                  >
                    Invite Staff
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.invite-text {
  position: relative;
  margin-bottom: 23px;
}

.btn-close {
  position: absolute;
  right: 20px;
  top: 8%;
  transform: translateY(-50%);
}
</style>
