<template>
  <v-row justify="space-between">
    <v-col cols="3" v-for="contact in contacts" :key="contact.id">
      <v-icon class="mr-2">mdi-{{ contact.icon }}</v-icon> <a class="amber--text text-decoration-none" :href="contact.link" target="_blank" rel="noreferrer noopener" v-if="contact.link !== ''">{{ contact.name }}</a> <span class="amber--text text-decoration-none" v-else>{{ contact.name }}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataContacts'],

  data () {
    return {
      contacts: this.cvDataContacts,
    }
  },

  watch: {
    cvDataContacts: {
      handler(val) {
        this.contacts = val
      },
      deep: true
    }
  },
}
</script>
