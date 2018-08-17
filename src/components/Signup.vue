<template lang="html">
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input type="text" placeholder="Your email" class="form-control" v-model="email" autocomplete="false">
      <input type="password" placeholder="Your password" class="form-control" v-model="password">
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
      <br>
    </div>
    <br>
    <br>
    <router-link to="/signin">Already a user? Sign In</router-link>
    <br>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
require('firebase/auth')

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="css">
</style>
