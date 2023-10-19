<script setup></script>

<template>
  <div
    id="the-art-of-artemiz"
    class="background-gradient-green-light-to-dark"
  >
    <div class="container">
      <div class="left-container">
        <h2 class="nourd-900 font-drop-shadow-white">The</h2>
        <h2 class="nourd-900 font-drop-shadow-white">Art of</h2>
        <h2 class="nourd-900 background-gradient-yellow-light-to-dark font-color-dark-green">ARTEMIZ</h2>
      </div>

      <div class="right-container">
        <div class="content-container">
          <p>These are loads of agencies out there but not many have the speed and capabilities of ARTEMIZ. Traditional marketers burden their processes with inefficiencies and manual methods that oftentimes don't live up to the promises made.</p>
          <p>We truly believe in revolutionising digital marketing with new-age technology. Our embrace of future tech and methods allow us to optimise and enhance your marketing initiatives in-line with your goals.</p>
          <p>Value for money is the name of the game; not cost reduction.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "../../assets/sass/variables"
@import "../../assets/sass/global"
@import "../../assets/sass/fonts"

#the-art-of-artemiz
  .container
    display: flex
    position: relative
    padding: 60px 0
    .left-container
      position: absolute
      top: 120px
      h2
        padding-left: 60px
        font-size: 60px
        padding-right: 10px
    .right-container
      margin-left: 280px
      .content-container
        background-color: $dark-green
        padding: 80px 120px 120px 180px
        p
          margin-bottom: 20px
          font-size: 20px
          line-height: 40px
          color: white
</style>
