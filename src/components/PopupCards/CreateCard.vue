<template>
  <div class="popup-card" v-show="display">
    <div class="container">
      <div class="row">
        <div class="popup-form card col s12 m10 l10">
          <h4 class="center">
            New Contract ID
            <i class="material-icons right close" @click="Hide">close</i>
          </h4>
          <div class="row">
            <form class="col s12 m12 l12">
              <!-- section 1 -->
              <h6 class="red-color">Customer Information</h6>
              <div class="row">
                <div class="input-field col s12 m6 l6 ">
                  <select>
                    <option value disabled selected>Select Billed To</option>
                    <option value="1">Agent</option>
                    <option value="2">Customer</option>
                  </select>
                  <label for="portfolio">Owner Type</label>
                </div>
              </div>
              <!-- Section 2 -->
              <h6 class="red-color">Provider Information</h6>
              <div class="row">
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Select Storage Type</option>
                    <option value="1">Unit Based</option>
                    <option value="2">Area Based</option>
                  </select>
                  <label for="portfolio">Storage Type</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Select Storage Plan</option>
                    <option value="1">Shared</option>
                    <option value="2">Dedicated</option>
                  </select>
                  <label for="portfolio">Storage Plan</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Select Provider</option>
                    <option value="1">Olympic warehouse Pvt ltd</option>
                  </select>
                  <label for="portfolio">Providers</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Select Warehouses</option>
                    <option value="1">No Data Available</option>
                  </select>
                  <label for="portfolio">WareHouses</label>
                </div>
              </div>
              <!-- Secton 3 -->

              <h6 class="red-color">Service Information</h6>
              <div class="row">
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Select Billing Frequency</option>
                    <option value="1">Daily</option>
                  </select>
                  <label for="portfolio">Billing Frequency</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <input type="number" placeholder="0.00" class="validate">
                  <label for="portfolio">Threshold(%)</label>
                </div>
                <div class="input-field col s12 m6 l6 ">
                  <input type="date" class="validate" placeholder="Select Date">
                  <label for="portfolio">Expiry Date</label>
                </div>
              </div>
              <div class="row">
                <button class="btn btn-primary btn-large pop-btn col s12 m5 l5 left">Create</button>
                <button class="btn btn-primary btn-large pop-btn col s12 m5 l5 white right" @click="Hide">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["display", "Show"],
  name: "CreateCard",
  methods: {
    Hide() {
      this.Show(false);
    }
  }
};
</script>

<style scope>
.popup-form {
  position: fixed;
  height: 80%;
  overflow: scroll;
  top: -10% !important;
  left: -15% !important;
  padding-top: 15px !important;
}
.red-color {
  color: red;
  text-align: left !important;
  margin-bottom: 20px !important;
}
</style>

