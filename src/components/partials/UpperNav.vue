<template>
  <div class="row upper-nav">
    <ul>
      <li>
        &nbsp;&nbsp;
        <span
          class="link dropdown-trigger"
          data-target="manga-dropdown3"
          style="color: #f0458cee, padding-left: 5px "
        >Admin</span>
        &nbsp; or &nbsp;
        <span
          class="link"
          style="color: #f0458cee, padding-left: 5px "
        >Sign Out</span>
      </li>
    </ul>

    <div v-if="display">
      <ul class="container" style="width: 70%;padding-left: 10%; float: right">
        <li v-for="list in text" :key="list">
          <router-link :to="'/'+list" exact>{{list}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpperNav",
  props: ["text"],
  data() {
    return {
      display: true
    };
  },
  mounted() {
    if (window.innerWidth > 0 && window.innerWidth <= 650) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
};
</script>

<style>
.link:hover {
  text-decoration: underline;
  color: red;
}
</style>

