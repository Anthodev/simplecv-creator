<template>
  <v-app>
    <v-main>
      <v-container class="fill-height fluid">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" class="text-center" v-if="usercount === null">
            <v-progress-circular indeterminate color="amber" />
          </v-col>
          <v-col cols="12" sm="8" md="6" v-else>
            <app-signin v-if="usercount == 1"></app-signin>
            <app-signup v-else ></app-signup>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Signin from '../components/auth/Signin'
import Signup from '../components/auth/Signup'

export default {
  name: "Auth",

  computed: {
    usercount() {
      console.log(this.$store.getters.usercount)
      return this.$store.getters.usercount
    }
  },

  components: {
    'appSignin': Signin,
    'appSignup': Signup
  },

  methods: {
    fetchData() {
      this.$store.dispatch('FETCH_USERCOUNT')
    }
  },

  created: function() {
    this.fetchData()
  }
}
</script>
