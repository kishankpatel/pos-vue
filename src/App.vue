<template>
  <div id="app">
    <Layout v-if="isUserLoggedIn">
      <router-view class="container main_container" />
    </Layout>
    <router-view v-else class="container main_container" />
  </div>
</template>

<script>

import Layout from '@/layouts/Layout';

export default {
  name: 'App',
  components: { Layout },
  data () {
    return {
      isUserLoggedIn: false
    }
  }
}
</script>

<style scoped>
.main_container {
  margin-top: 20px;
}
</style>
