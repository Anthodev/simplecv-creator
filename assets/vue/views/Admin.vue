<template>
  <v-row align="top" justify="center">
    <v-col cols="12">
      <v-toolbar flat>
        <v-toolbar-title>Admin CV</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs slider-color="amber" centered>
            <v-tab>My Information</v-tab>
            <v-tab>Contacts</v-tab>
            <v-tab>Experiences</v-tab>
            <v-tab>Trainings</v-tab>
            <v-tab>Portfolio</v-tab>
            <v-tab>Aptitudes</v-tab>
            <v-tab>Skills</v-tab>
            <v-tab>Soft skills</v-tab>
            <v-tab>Interests</v-tab>
            <v-tab>Languages</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items>
        
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Admin",
}
</script>
