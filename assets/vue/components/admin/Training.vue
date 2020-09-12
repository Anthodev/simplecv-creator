<template>
  <v-tab-item value="tab-trainings">
    <v-card flat>
      <v-card-text>
        <v-form id="trainingForm" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Training</div>
          <v-divider />
          <v-text-field v-model="title" placeholder="Title" filled></v-text-field>
          <v-text-field v-model="training" placeholder="Training" filled></v-text-field>
          <v-text-field v-model="link" placeholder="Training link" type="url" filled></v-text-field>
          <v-text-field v-model="location" placeholder="Location" filled></v-text-field>
          <editor
            id="description"
            color="black"
            v-model="description"
            apiKey='mvh61fdjdui6dvdxz5q0ylb2e69bvuuzfbv5ewrbjtwtwooq'
            :init="{
              selector: 'v-textarea',
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap',
                'preview anchor media',
                'paste code help wordcount'
              ],
              toolbar: 'formatselect | bold italic | bullist numlist'
            }" />
          <v-text-field v-model="date_start" class="mt-7" label="Date start" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
          <v-text-field v-model="date_end" label="Date end" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
          <v-text-field v-model="order" placeholder="List Order" type="number" filled></v-text-field>
          <v-col cols="12" md="2"><v-btn form="trainingForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataTrainings).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Trainings list</div>
        <v-divider />
        <v-expansion-panels>
          <v-expansion-panel v-for="(formTraining) in trainings" :key="formTraining.id">
            <v-expansion-panel-header>{{ formTraining.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field v-model="formTraining.title" placeholder="Title" filled></v-text-field>
              <v-text-field v-model="formTraining.training" placeholder="Training" filled></v-text-field>
              <v-text-field v-model="formTraining.training_link" placeholder="Training link" type="url" filled></v-text-field>
              <v-text-field v-model="formTraining.location" placeholder="Location" filled></v-text-field>
              <editor
                color="black"
                v-model="formTraining.description"
                apiKey='mvh61fdjdui6dvdxz5q0ylb2e69bvuuzfbv5ewrbjtwtwooq'
                :init="{
                  selector: 'v-textarea',
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap',
                    'preview anchor media',
                    'paste code help wordcount'
                  ],
                  toolbar: 'formatselect | bold italic | bullist numlist'
                }"
                :init-value='formTraining.description'
              />

              <v-text-field :id="'inputTrainingDateStart'+formTraining.id" :value="formatExpDate(formTraining.date_start)" class="mt-7" label="Date start" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
              
              <v-text-field :id="'inputTrainingDateEnd'+formTraining.id" :value="formatExpDate(formTraining.date_end)" label="Date end" type="date" filled></v-text-field>

              <v-text-field v-model="formTraining.list_order" placeholder="List Order" type="number" filled></v-text-field>
              <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = formTraining.id; loadingEdit=formTraining.id; onEdit(formTraining)" color="amber" :loading="loading && loadingEdit == formTraining.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = formTraining.id; loadingDelete=formTraining.id; onDelete(formTraining)" color="red" :loading="loading && loadingDelete == formTraining.id">Delete</v-btn>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>


<script>
import Snackbar from '../misc/Snackbar'
import TinyMCE from '@tinymce/tinymce-vue'
import { format, parseISO } from 'date-fns'

export default {
  props: ['cvDataTrainings'],

  data () {
    return {
      trainings: this.cvDataTrainings,
      title: '',
      training: '',
      link: '',
      location: '',
      description: '',
      date_start: '',
      date_end: '',
      order: 0,
      loading: false,
      loader: null,
      loadingIndex: -1,
      loadingEdit: -1,
      loadingDelete: -1,
      snackbar: {
        state: false,
        message: ''
      }
    }
  },

  watch: {
    cvDataTrainings: {
      handler(val) {
        this.trainings = val
      },
      deep: true
    }
  },

  methods: {
    formatExpDate(date) {
      if (date !== null) return format(parseISO(date), 'yyyy-MM-dd')
    },

    onSubmit() {
      this.loading = !this.loading

      const formData = {
        title: this.title,
        training: this.training,
        link: this.link,
        location: this.location,
        description: this.description,
        date_start: this.date_start,
        date_end: this.date_end,
        order: this.order,
      }

      this.$store.dispatch('ADD_TRAINING', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.title = ''
        this.training = ''
        this.link = ''
        this.location = ''
        this.description = ''
        this.date_start = ''
        this.date_end = ''
        this.order = 0
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(formTraining) {
      this.loading = !this.loading

      const formData = {
        id: formTraining.id,
        title: formTraining.title,
        training: formTraining.training,
        link: formTraining.training_link,
        location: formTraining.location,
        description: formTraining.description,
        date_start: document.querySelector('#inputTrainingDateStart'+formTraining.id).value,
        date_end: document.querySelector('#inputTrainingDateEnd'+formTraining.id).value,
        order: formTraining.list_order,
      }

      this.$store.dispatch('EDIT_TRAINING', formData).then(() => {
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.snackbar.message = "Error"
        this.snackbar.state = true
      }).finally(() => {
        this.loading = false
      })
    },

    onDelete(training) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_TRAINING', training.id).then(() => {
        this.snackbar.message = "The entry has been deleted."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.snackbar.message = "Error"
        this.snackbar.state = true
      }).finally(() => {
        this.loading = false
      })
    },
  },

  components: {
    appSnackbar: Snackbar,
    editor: TinyMCE
  }
}
</script>
