<template>
  <div>
    <div class="row">
      <div class="col s12 m8 l8">
        <div class="card black-bg padding">
          <div class="row">
            <div class="col s12">
              <h4 class="heading left">Contracts</h4>
              <button class="btn btn-large btn-primary pop-btn white right" @click="Show">Filter</button>
            </div>
          </div>
        </div>

        <div class="card scroll shadow col s12 m4 l4" :class="[fixed ? 'fixed' : '']">
          <OrderBar/>
        </div>
        <div class="col s12 m5 l5 cardSpace" v-for="data in Data" :key="data.id">
          <ContainerCards :data="data"/>
        </div>
      </div>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large red" @click="Show2">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m8 l8">
        <FilterCard :display="display" :Show="Show"/>
        <CreateCard :display="display2" :Show="Show2"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterCard from "./PopupCards/Filter";
import OrderBar from "./partials/OrderBar";
import CreateCard from "./PopupCards/CreateCard";
import ContainerCards from "./partials/ContainerCards";
import { Data } from "../Data";
import { setTimeout } from 'timers';

export default {
  name: "ContractPage",
  data() {
    return {
      id: "modal1",
      display: false,
      display2: false,
      fixed: true,
      Data: Data
    };
  },
  methods: {
    Show(condition) {
      if (condition == false) {
        this.display = false;
      } else {
        this.display = true;
      }
    },
    Show2(condition) {
      if (condition == false) {
        this.display2 = false;
      } else {
        this.display2 = true;
      }
    }
  },
  mounted() {
    if (window.innerWidth > 0 && window.innerWidth <= 650) {
      this.fixed = false;
    } else {
      this.fixed = true;
    }
  },
  components: {
    FilterCard,
    OrderBar,
    ContainerCards,
    CreateCard
  }
};
</script>

<style >
.red:hover {
  background: rgb(153, 2, 2) !important;
}
.padding {
  padding: 2rem;
}
.shadow {
  filter: drop-shadow(-2px 0px 10px grey);
}
.fixed {
  position: fixed;
  height: 500px;
  right: 0 !important;
  bottom: 10% !important;
}
.heading {
  text-decoration-color: black;
  text-decoration: underline;
  text-decoration-style: wavy;
}
.cardSpace {
  margin: 10px;
  margin-top: 35px;
}
.scroll {
  height: 550px;
  overflow-y: scroll;
}
</style>
