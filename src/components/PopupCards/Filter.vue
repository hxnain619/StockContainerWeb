<template>
  <div class="popup-card" v-show="display">
    <div class="container">
      <div class="row">
        <div class="popup-form card col s12 m10 l10">
          <h4 class="center">
            Filter/Search
            <i class="material-icons right close" @click="Hide">close</i>
          </h4>
          <div class="row">
            <form class="col s12 m12 l12">
              <div class="row">
                <div class="input-field col s12 m6 l6">
                  <input id="label" type="text" class="validate" autocomplete="on">
                  <label for="label">Label</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <input id="contract" type="text" class="validate" autocomplete="on">
                  <label for="contract">Contract ID</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <input id="portfolio" type="text" class="validate" autocomplete="on">
                  <label for="portfolio">Portfolio</label>
                </div>
                <div class="input-field col s12 m6 l6">
                  <select>
                    <option value disabled selected>Choose your option</option>
                    <option value="1">Corrugated Boxes</option>
                    <option value="2">Box Board / Paper Board Carton</option>
                    <option value="3">Paper Bags And Sack</option>
                    <option value="4">Unsized Cargo</option>
                    <option value="5">Pallet</option>
                  </select>
                  <label for="portfolio">Stock Container</label>
                </div>
                <button class="btn btn-large btn-primary col s12 m6 l6 pop-btn">
                  Search
                  <i class="material-icons right">send</i>
                </button>
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
  name: "FilterCard",
  props: ["display", "Show"],
  data() {
    return {};
  },
  methods: {
    Hide() {
      this.Show(false);
    }
  }
};
</script>

<style >
.show {
  display: block;
}

.close:hover {
  color: #b41a1af8;
  transition: color 0.2s ease-in 1;
}
.hide {
  display: none;
}
</style>
