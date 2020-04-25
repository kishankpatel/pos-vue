<template>
  <div class='bill-listing-page'>
    <div class="text-right">
      <CreateItem />
    </div>
    <table class='table table-hover table-bordered'>
      <thead class="thead-light">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Tags</th>
          <th>Added Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.tags}}</td>
          <td>{{item.created_at}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import CreateItem from './CreateItem';

export default {
  data () {
    return {
      items: []
    }
  },
  components: { CreateItem },
  created () {
    var that = this;
    this.$http.get('/items').then((response) => {
      that.items = response.data.items
    })
  }
}
</script>
