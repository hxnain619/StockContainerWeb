<template>
  <div class="container">
    <h4>Your Order</h4>
    <div class="divider"></div>
    <table class="striped responsive-table">
      <tbody>
        <tr>
          <td>MANA-2019-000001</td>
          <td>$69.00</td>
        </tr>
        <tr>
          <td>MANA-2019-000001</td>
          <td>$69.00</td>
        </tr>
      </tbody>
    </table>
    <h4>Orders Summary</h4>
    <div class="divider"></div>
    <table class="striped responsive-table">
      <tbody>
        <tr>
          <td>Order SubTotal</td>
          <td>$138.00</td>
        </tr>
        <tr>
          <td>Estimated Tax</td>
          <td>$00.00</td>
        </tr>
        <tr class="total">
          <td>
            <b>
              <h6>Order Total</h6>
            </b>
          </td>
          <td>
            <b>
              <h6>$138.00</h6>
            </b>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      class="btn btn-large btn-primary col s12 m12 l12 pop-btn"
      @click="Redirect"
    >Place Your Order</button>
  </div>
</template>

<script>

export default {
  name: "OrderBar",
  methods: {
    Redirect() {
      this.$router.push("/Checkout" );
    }
  }
};
</script>
<style scoped>
.total {
  border-top: 1px solid red;
  background: rgba(0, 0, 0, 0.164) !important;
}
</style>
