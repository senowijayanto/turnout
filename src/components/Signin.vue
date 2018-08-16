<template lang="html">
  <div class="form-inline">
    <h3>Sign In</h3>
    <div class="form-group">
      <input type="text" placeholder="Your email" class="form-control" v-model="email" autocomplete="false">
      <input type="password" placeholder="Your password" class="form-control" v-model="password">
      <button class="btn btn-primary" @click="signIn">Sign In</button>
    </div>
    <br>
    <p>{{error.message}}</p>
    <br>
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
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style lang="css">
</style>
