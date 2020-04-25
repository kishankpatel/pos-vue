<template>
  <div class='bill-listing-page'>
    <div class="text-right">
      <CreateBill />
    </div>
    <table class='table table-hover table-bordered'>
      <thead class="thead-light">
        <tr>
          <th>Bill to</th>
          <th>Total Amount</th>
          <th>Net Amount</th>
          <th>Billed Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in bills" :key="bill.id">
          <td>{{bill.bill_to}}</td>
          <td>{{bill.total_amount}}</td>
          <td>{{bill.net_amount}}</td>
          <td>{{bill.created_at}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import CreateBill from './CreateBill';

export default {
  data () {
    return {
      bills: []
    }
  },
  components: { CreateBill },
  created () {
    var that = this;
    this.$http.get('/bills').then((response) => {
      that.bills = response.data.bills
    })
  }
}
</script>
