<template>
  <div class="">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="user_email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="user_password"
          id="exampleInputPassword1"
          placeholder="Password">
      </div>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <button @click="register" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      user_email: '',
      user_password: ''
    }
  },
  methods: {
    async register(){
      await AuthenticationService.register({
        email: this.user_email,
        password: this.user_password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    margin: 0 auto;
    max-width: 670px;
  }
</style>
