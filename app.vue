<template>
  <div>
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<script setup>
const layout = "default";
</script>

<style lang="sass" scoped>
@font-face
  font-family: "Butler"
  src: url("assets/fonts/butler/Butler-FREE-VERSION-ExtraBold.otf")
  font-weight: 900

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_light.ttf")
  font-weight: 100

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_medium.ttf")
  font-weight: 300

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_regular.ttf")
  font-weight: 400

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_semi_bold.ttf")
  font-weight: 600

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_bold.ttf")
  font-weight: 700

@font-face
  font-family: "Nourd"
  src: url("assets/fonts/nourd/nourd_heavy.ttf")
  font-weight: 900
</style>
