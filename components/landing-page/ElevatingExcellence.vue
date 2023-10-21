<script setup></script>

<template>
  <div id="elevating-excellence-every-day">
    <div class="container section">
      <div class="content-container">
        <div class="left-container">
          <div class="fill-background-green-left" />

          <div class="image-container">
            <img src="../../assets/images/landing-page/elevating-excellence/professional-business-smile.png" />
          </div>
        </div>

        <div class="right-container">
          <h2 class="title">Elevating Excellence</h2>
          <h2 class="title-text-white">Every Day.</h2>
          <div class="yellow-underline" />

          <div class="statistic-container">
            <div class="statistic-item background-gradient-yellow-light-to-dark">
              <h2>92%</h2>
              <p>Elevate Your Brand's Presence</p>
            </div>

            <div class="statistic-item background-gradient-yellow-light-to-dark">
              <h2>2x</h2>
              <p>Lead Gen in 3 Months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../../assets/sass/variables"
@import "../../assets/sass/global"
@import "../../assets/sass/fonts"

.fill-background-green-left
  background-color: $dark-green
  position: absolute
  height: 100%
  left: -100%
  top: 0
  width: 100%
  +mobile
    display: none

#elevating-excellence-every-day
  .container
    .content-container
      position: relative
      .left-container
        width: 70%
        background-color: $dark-green
        flex: 2
        padding-right: 10%
        padding-left: 80px
        padding-top: 80px
        +mobile
          display: none
        .image-container
          font-size: 0
          height: 100%
          display: flex
          justify-content: center
          align-items: flex-end
          img
            transform: scaleX(-1)
            width: 100%
      .right-container
        width: 45%
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        +mobile
          position: initial
          width: 100%
          transform: none
        .title
          @include large-yellow-header-butler
        .title-text-white
          color: white
          font-family: "Butler"
          -webkit-filter: drop-shadow(4px 4px 2px black)
          font-size: 80px
          line-height: 90px
        .yellow-underline
          width: 50%
          height: 2px
          background: -webkit-linear-gradient($dark-yellow, $light-yellow)
          margin-bottom: 40px
          margin-top: 20px
      .statistic-container
        display: flex
        justify-content: space-between
        .statistic-item
          flex: 0 0 48%
          padding: 20px 40px
          filter: drop-shadow(5px 5px 2px black)
          border-radius: 8px
          h2
            text-align: center
            font-family: "Nourd"
            font-weight: 900
            font-size: 50px
          p
            text-align: center
            font-family: "Nourd"
            font-weight: 700
            font-size: 18px
</style>
