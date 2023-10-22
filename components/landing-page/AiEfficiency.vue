<script setup></script>

<template>
  <div id="ai-efficiency">
    <div class="container section">
      <div class="left-container">
        <div class="border-container">
          <div class="content-container">
            <h2>Ai</h2>
            <p>In the realm of innovation, ARTEMIZ weaves the latest Ai marvels with our gifted professionals, crafting symphony of excellence that fulfills your business needs and secures your competitive edge.</p>
          </div>
        </div>
      </div>

      <div class="right-container">
        <div class="border-container">
          <div class="content-container">
            <h2>Efficiency</h2>
            <p>Through the collection and thorough analysis of metrics and essential datasets, ARTEMIZ guarantess that your brand message and content not only reaches its intended audience but goes above and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../../assets/sass/responsive'
@import "../../assets/sass/variables"
@import "../../assets/sass/global"
@import "../../assets/sass/fonts"

#ai-efficiency
  .container
    display: flex
    justify-content: space-between
    position: relative
    +mobile
      display: block
    .left-container
      flex: 0 0 48%
      padding: 10px 10px 10px 0px
      z-index: 2
      +mobile
        padding: 0
      .border-container
        border: 2px solid $dark-yellow
        position: relative
        .content-container
          @include background-gradient-yellow-light-to-dark
          text-align: right
          padding: 60px
          border-radius: 12px
          transform: translate(20px, 20px)
          filter: drop-shadow(10px 10px 2px black)
          +mobile
            text-align: left
            transform: translate(10px, 10px)
          h2
            @include large-dark-green-header-butler
          p
            @include regular-dark-green-nourd
            line-height: 40px
            width: 70%
            display: block
            margin-left: auto
            +mobile
              width: 100%

    .right-container
      flex: 0 0 52%
      margin-top: 150px
      padding: 0px 0 0 40px
      z-index: 1
      +mobile
        margin-top: 40px
        padding: 0
      .border-container
        border: 2px solid $dark-yellow
        position: relative
        .content-container
          background-color: $dark-green
          text-align: left
          padding: 60px 60px 60px 140px
          border-radius: 12px
          transform: translate(-17%, -25px)
          filter: drop-shadow(10px 10px 2px black)
          width: 115%
          +mobile
            width: 100%
            transform: translate(10px, 10px)
            padding: 60px
          h2
            @include large-yellow-header-butler
          p
            @include regular-white-nourd
            line-height: 40px
            max-width: 65%
            +mobile
              max-width: 100%
</style>
