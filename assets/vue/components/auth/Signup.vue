<template>
  <v-card class="elevation-12">
    <v-toolbar color="indigo" dark flat>
      <v-toolbar-title>Simple CV - Create an account</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form id="signupForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
        <v-text-field id="username" label="Login" name="username" prepend-icon="mdi-account" type="text" v-model="username" @blur="$v.username.$touch()" :error-messages="usernameErrors" placeholder="Enter your username" required autofocus></v-text-field>

        <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="password" @blur="$v.password.$touch()" :error-messages="passwordErrors" placeholder="Enter a password" required></v-text-field>
        <v-progress-linear :value="passwordLengthProgress" :color="colorPassword" height="7"></v-progress-linear>

        <v-text-field id="passwordConfirm" label="Confirm the password" name="passwordConfirm" prepend-icon="mdi-lock" type="password" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()" :error-messages="passwordConfirmErrors" placeholder="Confirm the password" required></v-text-field>
        <v-progress-linear :value="passwordConfirmLengthProgress" :color="colorPasswordConfirm" height="7" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-card-text class="caption"><router-link :to="{ name: 'Auth' }">Login to your account</router-link></v-card-text>
      <v-spacer></v-spacer>
      <v-btn form="signupForm" type="submit" color="primary" :loading="loading" :disabled="$v.$invalid">Create an account</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, alphaNum, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Signup',
  layout: 'auth',

  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      loading: false
    }
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('An username is required.')
      !this.$v.username.alphaNum && errors.push('The username must be alphabetical and/or numerical.')
      !this.$v.username.minLength && errors.push('The username must be 4 characters minimum.')
      return errors
    },

    passwordErrors() {
        const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.minLength && errors.push('Password must be 8 characters minimum.')
      return errors
    },

    passwordConfirmErrors() {
      const errors = []
      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.required && errors.push('Confirm the password.')
      !this.$v.passwordConfirm.sameAsPassword && errors.push('This field must be the same as the password')
        return errors
    },

    passwordLengthProgress() {
      return Math.min(100, this.password.length * 12.5)
    },

    passwordConfirmLengthProgress() {
      return Math.min(100, this.passwordConfirm.length * 12.5)
    },

    colorPassword() {
      return ['error', 'warning', 'success'][Math.floor(this.passwordLengthProgress / 40)]
    },

    colorPasswordConfirm() {
      return ['error', 'warning', 'success'][Math.floor(this.passwordConfirmLengthProgress / 40)]
    },
  },

  validations: {
    username: {
      required,
      alphaNum,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    passwordConfirm: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    onSubmit() {
      this.$v.$touch()
      this.loading = !this.loading
      if (this.$v.$error) {
        this.loading = !this.loading
        return
      }
      if (this.$v.$error) return
      
      const formData = {
        username: this.username,
        password: this.password,
        role: 'User'
      }
      this.$store.dispatch('SIGNUP', formData).then(() => {
        this.loading = !this.loading
      })
    }
  }
}
</script>
