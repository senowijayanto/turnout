<template lang="html">
  <div class="">
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    {{$store.state}}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
require('firebase/auth')

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>

<style lang="css">
</style>
