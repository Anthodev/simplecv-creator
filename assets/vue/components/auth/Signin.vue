<template>
    <v-card class="elevation-12">
        <v-toolbar color="indigo" dark flat>
            <v-toolbar-title>Simple CV - Login</v-toolbar-title>
            <v-spacer />
        </v-toolbar>
        <v-card-text>
            <v-form id="signinForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
                <v-text-field id="username" label="Login" name="username" prepend-icon="mdi-account" type="text" v-model="username" @blur="$v.username.$touch()" :error-messages="usernameErrors" placeholder="Enter your username" required autofocus></v-text-field>

                <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="password" @blur="$v.password.$touch()" :error-messages="passwordErrors" placeholder="Enter your password"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn form="signinForm" type="submit" color="primary" :disabled="$v.$invalid || disabled" :loading="formLoading">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import {
  required,
  alphaNum,
  minLength
} from 'vuelidate/lib/validators'
export default {
  name: 'Signin',
  layout: 'auth',

  data() {
    return {
      username: '',
      password: '',
      formLoading: false,
      disabled: false
    }
  },

  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('Username is required.')
      !this.$v.username.alphaNum && errors.push('Username must be alphabetical and/or numerical.')
      !this.$v.username.minLength && errors.push('Username must be 4 characters minimum.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      !this.$v.password.minLength && errors.push('Password must be 8 characters minimum.')
      return errors
    }
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
    }
  },

  methods: {
    onSubmit() {
      this.$v.$touch()
      this.formLoading = true
      this.disabled = true
      if (this.$v.$error) {
        this.formLoading = false
        this.disabled = false
        return
      }
      const formData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('LOGIN', formData).then(() => {
        this.formLoading = false
        this.disabled = false
      })
      .catch((error) => {
        this.formLoading = false
        this.disabled = false
      })
    }
  },
}
</script>
