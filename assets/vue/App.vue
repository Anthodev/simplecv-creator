<template>
  <v-app class="mb-6">
    <v-main>
      <v-col cols="9" class="mx-auto">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
