<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-4 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
        <h3>Welcome</h3>
        <p>You are 30 seconds away from to grow your business!</p>
        <router-link to="/login">Login</router-link><br/>
      </div>
      <div class="col-md-8 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 class="register-heading">Sign Up</h3>
            <form @submit.prevent="registerUser" class="row register-form" autocomplete="off">
              <div class="col-md-12">
                <div class="form-group">
                  <input v-model="user.first_name" type="text" class="form-control" placeholder="First Name *" />
                  <div v-if="$v.user.first_name.$error" class="text-danger small">First Name is required</div>
                </div>
                <div class="form-group">
                  <input v-model="user.last_name" type="text" class="form-control" placeholder="Last Name *" />
                  <div v-if="$v.user.last_name.$error" class="text-danger small">Last Name is required</div>
                </div>
                <div class="form-group">
                  <input v-model="user.email" type="email" class="form-control" placeholder="Your Email *" />
                  <div v-if="$v.user.email.$error" class="text-danger small">
                    <span v-if="!$v.user.email.required">Email is required</span>
                    <span v-if="!$v.user.email.email">Email is invalid</span>
                  </div>
                </div>
                <div class="form-group">
                  <input v-model="user.password" type="password" class="form-control" placeholder="Password *" />
                  <div v-if="$v.user.password.$error" class="text-danger small">
                    <span v-if="!$v.user.password.required">Password is required</span>
                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                  </div>
                </div>
                <div class="form-group">
                  <input v-model="user.confirm_password" type="password" class="form-control"  placeholder="Confirm Password *" />
                  <div v-if="$v.user.confirm_password.$error" class="text-danger small">
                    <span v-if="!$v.user.confirm_password.required">Confirm Password is required</span>
                    <span v-else-if="!$v.user.confirm_password.sameAsPassword">Passwords must match</span>
                  </div>
                </div>
                <input type="submit"  class="btnRegister"  value="Register" :disabled="disabledSubmit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
export default {
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      disabledSubmit: false
    }
  },
  validations: {
    user: {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirm_password: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    registerUser () {
      /* eslint-disable no-debugger */
      debugger
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      var that = this;
      this.disabledSubmit = true;
      this.$http.post('/users').then((response) => {
        that.items = response.data.items
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.user.email = ''
      this.user.password = ''
    }, 1000)
  }
}
</script>

<style scoped>
.register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left a {
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
    outline: none;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}
</style>
