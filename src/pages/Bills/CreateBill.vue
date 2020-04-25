<template>
  <div class="mb-2">
    <b-button class="btn-sm" v-b-modal.create-bill>Create Bill</b-button>
    <b-modal
      id="create-bill"
      ref="modal"
      title="Create Bill"
      @show="resetModal"
      @hidden="resetModal"
      size="lg"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="bill.bill_to"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        bill: {
          bill_to: null,
          total_amount: null,
          net_amount: null,
          bill_items: [],
        }
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk() {

      },
      handleSubmit() {

      }
    }
  }
</script>
