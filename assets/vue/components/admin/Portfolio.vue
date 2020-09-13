<template>
  <v-tab-item value="tab-portfolio">
    <v-card flat>
      <v-card-text>
        <v-form id="portfolioForm" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Portfolio</div>
          <v-divider />
          <v-text-field v-model="name" placeholder="Name" filled></v-text-field>
          <v-file-input v-model="image" label="Image (jpg,png,jpeg)" filled></v-file-input>
          <v-text-field v-model="caption" placeholder="Caption" filled></v-text-field>
          <editor
              id="description_portfolio"
              color="black"
              v-model="description"
              :apiKey='tiny_mce_api'
              :init="{
                selector: 'v-textarea',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap',
                  'preview anchor media',
                  'paste code help wordcount'
                ],
                toolbar: 'formatselect | bold italic | bullist numlist | code'
              }" />
          <v-select
            v-model="type"
            label="Type"
            :items="['Professional', 'Personal']"
            single-line
            filled
          ></v-select>
          <v-text-field v-model="order" placeholder="List Order" type="number" filled></v-text-field>
          <v-col cols="12" md="2"><v-btn form="portfolioForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataPortfolios).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Portfolios list</div>
        <v-divider />
        <v-expansion-panels>
          <v-expansion-panel v-for="(portfolio) in portfolios" :key="portfolio.id">
            <v-expansion-panel-header>{{ portfolio.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field v-model="portfolio.name" placeholder="Name" filled></v-text-field>
              <v-file-input v-model="portfolio.image" label="Image (jpg,png,jpeg)" filled></v-file-input>
              <v-text-field v-model="portfolio.caption" placeholder="Caption" filled></v-text-field>
              <editor
                  color="black"
                  v-model="portfolio.description"
                  :apiKey='tiny_mce_api'
                  :init="{
                    selector: 'v-textarea',
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap',
                      'preview anchor media',
                      'paste code help wordcount'
                    ],
                    toolbar: 'formatselect | bold italic | bullist numlist | code'
                  }" />
              <v-select
                v-model="portfolio.type"
                label="Type"
                :items="['Professional', 'Personal']"
                single-line
                filled
              ></v-select>
              <v-text-field v-model="portfolio.order" placeholder="List Order" type="number" filled></v-text-field>
              <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = portfolio.id; loadingEdit=portfolio.id; onEdit(portfolio)" color="amber" :loading="loading && loadingEdit == portfolio.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = portfolio.id; loadingDelete=portfolio.id; onDelete(portfolio)" color="red" :loading="loading && loadingDelete == portfolio.id">Delete</v-btn>
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
  props: ['cvDataPortfolios'],

  data () {
    return {
      portfolios: this.cvDataPortfolios,
      name: '',
      image: '',
      caption: '',
      description: '',
      type: '',
      order: 0,
      loading: false,
      loader: null,
      loadingIndex: -1,
      loadingEdit: -1,
      loadingDelete: -1,
      tiny_mce_api: process.env.VUE_APP_TINYMCE_API,
      snackbar: {
        state: false,
        message: ''
      }
    }
  },

  watch: {
    cvDataPortfolios: {
      handler(val) {
        this.portfolios = val
      },
      deep: true
    }
  },

  methods: {
    formatExpDate(date) {
      return format(parseISO(date), 'yyyy-MM-dd')
    },

    onSubmit() {
      this.loading = !this.loading

      const formData = new FormData();
      formData.append('name', this.name)
      formData.append('image', this.image)
      formData.append('caption', this.caption)
      formData.append('description', this.description)
      formData.append('type', this.type)
      formData.append('order', this.order)

      this.$store.dispatch('ADD_PORTFOLIO', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.image = ''
        this.caption = ''
        this.description = ''
        this.type = ''
        this.order = 0
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(portfolio) {
      this.loading = !this.loading

      const formData = {
        id: portfolio.id,
        name: portfolio.name,
        image: portfolio.image,
        caption: portfolio.caption,
        description: portfolio.description,
        type: portfolio.type,
        order: portfolio.list_order,
      }

      this.$store.dispatch('EDIT_PORTFOLIO', formData).then(() => {
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

    onDelete(portfolio) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_PORTFOLIO', portfolio.id).then(() => {
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
