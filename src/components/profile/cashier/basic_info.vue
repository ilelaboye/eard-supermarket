<template>
  <div class="content-wrapper">
    <div class="info-page">
      <div class="head-text my-3">
        <h6>Basic Information</h6>
      </div>
      <form action="">
        <div class="row">
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">First name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your first name"
            />
          </div>
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">Last name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div class="each-field mb-3">
          <label class="mb-2" for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email address"
          />
        </div>
        <div class="each-field mb-3">
          <label class="mb-2" for="number">Phone number</label>
          <img src="" alt="" />
          <input type="number" class="form-control input-group" />
        </div>
        <div class="each-field mb-3">
          <label class="mb-2" for="address">Home Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your home address"
          />
        </div>
        <div class="row">
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">City</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your city"
            />
          </div>
          <div class="col-6 each-field mb-3">
            <label class="mb-2" for="name">State</label>
            <select
              aria-label="true"
              class="form-select"
            >
            <option value="Select State ">Select state</option>
            <option value="lagos ">lagos</option>
            <option value="Ibadan">Ibadan</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Osun">Osun</option>
            <option value="Ogun">Ogun</option>
            </select>
          </div>
        </div>

        <div class="each-field mt-3">
          <button class="button btn btn-primary text-white border-0" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  padding: 20px;
  background: #fff;
  min-height: 100vh;
}

.info-page {
  width: 50%;

  .button {
    height: 45px;
    width: 200px;
    border-radius: 30px;
  }
}
</style>
