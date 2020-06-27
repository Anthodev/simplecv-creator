<template>
  <v-tab-item value="tab-trainings">
    <v-card flat>
      <v-card-text>
        <div class="text-h5 text-uppercase font-weight-bold mb-2">Create a new training</div>
        <v-text-field placeholder="Title" filled></v-text-field>
        <v-text-field placeholder="School" filled></v-text-field>
        <v-text-field placeholder="School link" type="url" filled></v-text-field>
        <v-text-field placeholder="Location" filled></v-text-field>
        <v-text-field label="Date start" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
        <v-text-field label="Date end" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
        <v-text-field placeholder="List Order" type="number" filled></v-text-field>
        <v-btn color="primary">Add</v-btn>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>
