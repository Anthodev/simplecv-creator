<template>
  <v-tab-item value="tab-information">
    <v-card flat>
      <v-card-text>
        <v-form id="infoForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <template v-if="typeof info != 'undefined' && Object.keys(info).length !== 0">
            <v-text-field id="name" name="name" placeholder="Name" v-model="info.name" filled>{{ info.name }}</v-text-field>
            <v-text-field id="title" name="title" placeholder="Title" v-model="info.title" filled>{{ info.title }}</v-text-field>
          </template>
          <template v-else>
            <v-text-field id="name" name="name" placeholder="Name" v-model="info.name" filled></v-text-field>
            <v-text-field id="title" name="title" placeholder="Title" v-model="info.title" filled></v-text-field>
          </template>
          <v-row>
            <v-col cols="8">
              <v-file-input label="Image (jpg,png,jpeg)" accept="image/*" @change="handleFile" show-size filled></v-file-input>
            </v-col>
            <v-col cols="4" v-if="info.photo">
              <v-img :src="'/uploads/images/' + info.photo" height="auto" max-height="192" contain />
            </v-col>
          </v-row>
          <v-btn form="infoForm" type="submit" color="primary" :loading="loading">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <app-snackbar :data="snackbar" />
  </v-tab-item>
</template>

<script>
import Snackbar from '../misc/Snackbar'

export default {
  props: ['cvDataInfo'],

  data () {
    return {
      info: this.cvDataInfo,
      image: null,
      loading: false,
      snackbar: {
        state: false,
        message: ''
      }
    }
  },

  watch: {
    cvDataInfo(newValue, oldValue) {
      oldValue = newValue
    }
  },

  methods: {
    handleFile(files) {
      this.image = files
    },

    onSubmit() {
      this.loading = !this.loading

      let formData = new FormData()

      if(this.image != null || this.image != '') {
        if(this.image?.name != null) formData.append("image", this.image, this.image.name)
      }

      formData.append('name', this.info.name)
      formData.append('title', this.info.title)

      this.$store.dispatch('SET_USERINFO', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    }
  },

  components: {
    appSnackbar: Snackbar
  },
}
</script>
