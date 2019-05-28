<template>
  <div class="card cardHeight">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        <i class="material-icons right close">more_vert</i>
        {{data.Customer}}
      </span>
      <table class="striped highlight responsive-table">
        <tbody>
          <tr>
            <td>Contract ID</td>
            <td>{{data.ContractID}}</td>
          </tr>
          <tr>
            <td>WareHouse</td>
            <td>{{data.WareHouse}}</td>
          </tr>
          <tr>
            <td>Stock Value</td>
            <td>&#x20B9;{{data.StockValue}}</td>
          </tr>
          <tr>
            <td>Total Unit</td>
            <td>{{data.TotalUnit}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-large btn-primary pop-btn center" @click="Show">Update</button>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        <i class="material-icons right close">close</i>
        {{data.Customer}}
      </span>
      <table class="responsive-table striped highlight">
        <tbody>
          <tr>
            <td>Created At</td>
            <td>{{data.CreatedAt}}</td>
          </tr>
          <tr>
            <td>Storage Plan</td>
            <td>{{data.StoragePlan}}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td class="status">{{data.Status}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-large btn-primary pop-btn center" @click="Show">Update</button>
    </div>
    <UpdateCard :display="display" :Show="Show"/>
  </div>
</template>

<script>
import UpdateCard from "../PopupCards/UpdateCard";

export default {
  name: "ContainerCards",
  props: ["data"],
  data() {
    return {
      display: false
    };
  },
  methods: {
    Show(condition) {
      
      if (condition == false) {
        this.display = false;
      } else {
        this.display = true;
      }
    }
  },
  components: {
    UpdateCard
  }
};
</script>

<style>
.card-height {
  height: 350px;
  width: 350px !important;
}
.data {
  font-size: 14px;
  text-align: left;
}
.status {
  color: green;
}
</style>
