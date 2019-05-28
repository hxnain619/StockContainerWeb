<template>
  <nav>
    <div class="nav-wrapper">
      <div class="row" style=" margin-bottom: 0 ">
        <a
          to="#"
          data-target="mobile-demo"
          style=" color: #f35698 "
          class="sidenav-trigger waves-effect waves-light"
        >
          <i class="material-icons">menu</i>
        </a>
        <router-link to="/" exact class="brand-logo" style="color: #b41a1af8">
          <img src="../assets/logo/logo.svg">
        </router-link>
        <NavLinks v-bind:text="navText" />
        <SideNav v-bind:text2="navText3" v-bind:text="navText" id="mobile-demo"/>
      </div>
      <ul id="manga-dropdown1" class="dropdown-content">
        <li
          style="font-weight: bold !important, margin-right: 10"
          v-for="list in dropDown1"
          :key="list"
        >
          <router-link :to="'/'+list" exact>{{list}}</router-link>
        </li>
      </ul>
      <ul id="manga-dropdown2" class="dropdown-content">
        <li
          style="font-weight: bold !important, margin-right: 10"
          v-for="list in dropDown2"
          :key="list"
        >
          <router-link :to="'/'+list" exact>{{list}}</router-link>
        </li>
      </ul>
      <ul id="manga-dropdown3" class="dropdown-content">
        <li
          style="font-weight: bold !important, margin-right: 10"
          v-for="list in dropDown3"
          :key="list"
        >
          
          <router-link :to="'/'+list" exact @click="[list === 'Contracts' ? window.location.reload() : null]">{{list}}</router-link>
          <!-- <router-link :to="'/'+list" exact>{{list}}</router-link> -->
        </li>
      </ul>
      <UpperNav v-bind:text="navText2"/>
    </div>
  </nav>
</template>


<script>
import NavLinks from "./partials/NavLinks";
import SideNav from "./partials/SideNav";
import UpperNav from "./partials/UpperNav";

export default {
  name: "Nav",
  data() {
    return {
      display: true,
      id: "",
      navText: ["Dashboard", "Agents", "Customers", "Accounts", "Database"],
      navText2: ["Providers", "Payment Reciepts", "Contracts"],
      navText3: [
        "Dashboard",
        "Agents",
        "Customers",
        "Accounts",
        "Database",
        "Providers",
        "Payment Reciepts",
        "Contracts"
      ],
      dropDown1: ["Customers", "WareHouses", "Handling Bills"],
      dropDown2: ["Products", "Stock Containers", "Services"],
      dropDown3: ["Profile", "Settings"]
    };
  },
  methods: {},
  components: {
    NavLinks,
    SideNav,
    UpperNav
  }
};
</script>


<style>
.logo {
  text-align: left !important;
  color: #cc4365fa;
  letter-spacing: 5px;
  margin-left: 30px;
  font-weight: bold;
}
</style>
