<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Compétences</div>

      <v-row>
        <v-col cols="12">
          <div class="text-h6 font-weight-bold text-uppercase mb-2">Language</div>
          <div>
            <span v-for="i in 5" :key="i">
              <v-icon>mdi-checkbox-blank-circle</v-icon>
            </span>

            <span><v-icon>mdi-checkbox-blank-circle-outline</v-icon></span>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>
.section-title {
  border-bottom: 1px solid gold;
  font-size: 0.7em;
}
</style>
