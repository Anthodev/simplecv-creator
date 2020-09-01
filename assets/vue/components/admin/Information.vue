<template>
  <v-tab-item value="tab-information">
    <v-card flat>
      <v-card-text>
        <template v-if="typeof cvData != 'undefined' && typeof cvData.user != 'undefined'">
          <v-text-field placeholder="Name" v-model="name" filled>{{ cvData.user.name }}</v-text-field>
          <v-text-field placeholder="Title" v-model="title" filled>{{ cvData.user.title }}</v-text-field>
        </template>
        <template v-else>
          <v-text-field placeholder="Name" filled></v-text-field>
          <v-text-field placeholder="Title" filled></v-text-field>
        </template>
        <v-btn color="primary" :loading="loading">Submit</v-btn>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  props: ['cvData'],

  data () {
    return {
      name: '',
      title: '',
      loading: false
    }
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.name,
        title: this.title
      }

      this.$store.dispatch('SET_USERINFO', formData).then(() => {
        this.loading = true
      })
    }
  }
}
</script>
