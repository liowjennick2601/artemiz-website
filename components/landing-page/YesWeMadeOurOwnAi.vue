<script setup></script>

<template>
  <div id="yes-we-made-our-own-ai">
    <div class="container section">
      <h2 class="title-row-one">Yes! We Made</h2>
      <h2 class="title-row-two">Our Own Ai</h2>
      <p>Your precision targeting just finished in front of your eyes.</p>
      <video controls>
        <source src="../../assets/videos/landing-page/we-made-our-own-ai.mp4" />
      </video>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../../assets/sass/responsive'
@import "../../assets/sass/variables"
@import "../../assets/sass/global"
@import "../../assets/sass/fonts"

#yes-we-made-our-own-ai
  background-color: $dark-green
  .title-row-one
    @include large-white-header-butler
    text-align: center
  .title-row-two
    @include large-yellow-header-butler
    text-align: center
  p
    @include regular-white-nourd
    text-align: center
    margin-bottom: 40px
  video
    width: 100%
</style>
