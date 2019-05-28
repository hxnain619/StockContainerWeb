<template>
  <ul id="nav-mobile" width="45%" class="right hide-on-med-and-down container">
    <li v-for="list in text" :key="list">
      <div v-if=" list === 'Accounts' ">
        <a
          class="dropdown-trigger waves-effect waves-light"
          data-target="manga-dropdown1"
          href="#"
        >
          {{list}}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
      </div>
      <div v-else-if=" list === 'Database' ">
        <a
          class="dropdown-trigger waves-effect waves-light"
          data-target="manga-dropdown2"
          href="#"
        >
          {{list}}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
      </div>
      <div v-else>
        <router-link class="waves-effect waves-light" :to="'/'+list" exact>{{list}}</router-link>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {}
};
</script>
