<template>
  <div id="app">
    <Nav/>
    <div class="space"></div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "../src/components/Nav";
import M from "materialize-css";


export default {
  name: "App",
  components: {
    Nav
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var sidenav = document.querySelectorAll(".sidenav"),
        modal = document.querySelectorAll(".modal"),
        dropdown = document.querySelectorAll(".dropdown-trigger"),
        collapsible = document.querySelectorAll(".collapsible"),
        select = document.querySelectorAll("select"),
        tabs = document.querySelectorAll(".tabs");

      M.Dropdown.init(dropdown);
      M.FormSelect.init(select);
      M.Sidenav.init(sidenav);
      M.Collapsible.init(collapsible);
      M.Tabs.init(tabs);
      M.Modal.init(modal);
      M.updateTextFields();
    });
  }
};
</script>

<style>
@import url("../src/assets/src/materialize/css/materialize.min.css");
@import url("../src/assets/src/stylesheet/css/index.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.space {
  height: 6rem;
}
</style>
