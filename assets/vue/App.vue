<template>
  <v-app>
    <v-main class="mx-auto">
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
