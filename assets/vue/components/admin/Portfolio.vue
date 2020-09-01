<template>
  <v-tab-item value="tab-portfolio">
    <v-card flat>
      <v-card-text>
        <v-text-field placeholder="Name" filled></v-text-field>
        <v-file-input label="Image (jpg,png,jpeg)" filled></v-file-input>
        <v-text-field placeholder="Caption" filled></v-text-field>
        <v-text-field placeholder="Description" filled></v-text-field>
        <v-select
          label="Type"
          :items="['Professional', 'Personal']"
          single-line
          filled
        ></v-select>
        <v-text-field placeholder="List Order" type="number" filled></v-text-field>
        <v-btn color="primary">Add</v-btn>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>
