<template>
  <ul class="sidenav" :id="id">
    <div v-show="!display" v-for="list in text2" :key="list">
      <li>
        <div v-if=" list === 'Accounts' ">
          <a
            class="link_sidebar dropdown-trigger waves-effect waves-light"
            data-target="manga-dropdown1"
            href="#"
          >
            {{list}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </div>
        <div v-else-if=" list === 'Database' ">
          <a
            class="link_sidebar dropdown-trigger waves-effect waves-light"
            data-target="manga-dropdown2"
            href="#"
          >
            {{list}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </div>
        <div v-else>
          <router-link class="link_sidebar sidenav-close waves-effect waves-light" :to="'/'+list" exact>{{list}}</router-link>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: "SideNav",
  props: ["id", "text", "text2"],
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

<style scoped>
.link_sidebar {
    width: 90% !important;
    text-align: center;

}
</style>
