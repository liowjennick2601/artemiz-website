<script setup></script>

<template>
  <div id="spotlight-hub">
    <div class="container section">
      <div class="top-content-container">
        <div class="title-container">
          <h2 class="title">Spotlight<br />Hub.</h2>
          <div class="yellow-underline" />
        </div>
        <div class="item-container">
          <div class="image-container">
            <img src="../../assets/images/landing-page/spotlight-hub/ai-newspaper.png" />
          </div>
          <div class="copy-container">
            <h3 class="title">UK media coverage of artificial intelligence...</h3>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      <div class="bottom-content-container">
        <div class="item-list-container">
          <div class="item-container bottom">
            <div class="image-container">
              <img src="../../assets/images/landing-page/spotlight-hub/ai-conference.png" />
            </div>
            <div class="copy-container">
              <h3 class="title">UK media coverage of artificial intelligence...</h3>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div class="item-container bottom">
            <div class="image-container">
              <img src="../../assets/images/landing-page/spotlight-hub/city.png" />
            </div>
            <div class="copy-container">
              <h3 class="title">UK media coverage of artificial intelligence...</h3>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div class="item-container bottom">
            <div class="image-container">
              <img src="../../assets/images/landing-page/spotlight-hub/robot-reading.png" />
            </div>
            <div class="copy-container">
              <h3 class="title">UK media coverage of artificial intelligence...</h3>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

#spotlight-hub
  background-color: $dark-green
  .container
    .top-content-container, .bottom-content-container
      display: flex
      .title-container
        .title
          @include large-yellow-header-butler
          padding-bottom: 20px
        .yellow-underline
          width: 100%
          height: 2px
          background: -webkit-linear-gradient($dark-yellow, $light-yellow)
          margin-bottom: 40px
      .item-container
        display: flex
        padding-left: 80px
        &.bottom
          flex-direction: column
          padding-left: 0px
          flex: 0 0 30%
          .image-container
            margin-bottom: 20px
          .copy-container
            padding-left: 0px
        .image-container
          flex: 5
          img
            width: 100%
        .copy-container
          flex: 6
          padding-left: 20px
          .title
            @include medium-yellow-header-butler
            font-size: 30px
            line-height: 40px
            margin-bottom: 10px
          .description
            @include regular-white-nourd
      .item-list-container
        display: flex
        justify-content: space-between
        margin-top: 40px
</style>
