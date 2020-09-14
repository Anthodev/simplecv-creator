<template>
  <v-snackbar
    v-model="data.snackbar"
    timeout="3000"
    bottom
    color="success"
  >
    {{ data.message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="data.snackbar.state = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ['data'],

  data() {
    return {
      
    }
  }
}
</script>
