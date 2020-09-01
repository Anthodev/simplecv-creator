<template>
  <v-row justify="space-between">
    <v-col cols="3" v-for="extra in extras" :key="extra">
      <v-icon class="mr-2">mdi-account</v-icon> <a class="amber--text text-decoration-none" href="#" target="_blank" rel="noreferrer noopener">{{ extra }}</a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      extras: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
