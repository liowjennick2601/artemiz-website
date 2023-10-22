<script setup></script>

<template>
  <div id="empower-your-business">
    <div class="container section">
      <div class="content-container">
        <h2>Empower Your Business.</h2>
        <div class="yellow-underline" />
        <div class="item-list-container">
          <div class="item-container">
            <div class="item">
              <div class="image-container">
                <img src="../../assets/images/landing-page/empower-your-business/digital-public-relations.png" />
              </div>
              <p>Digital Public Relations</p>
            </div>
          </div>

          <div class="item-container">
            <div class="item">
              <div class="image-container">
                <img src="../../assets/images/landing-page/empower-your-business/content-strategy.png" />
              </div>
              <p>Content Strategy</p>
            </div>
          </div>

          <div class="item-container">
            <div class="item">
              <div class="image-container">
                <img src="../../assets/images/landing-page/empower-your-business/social-media-engineering.png" />
              </div>
              <p>Social Media Engineering</p>
            </div>
          </div>

          <div class="item-container">
            <div class="item">
              <div class="image-container">
                <img src="../../assets/images/landing-page/empower-your-business/campaign-management.png" />
              </div>
              <p>Campaign Management</p>
            </div>
          </div>

          <div class="item-container">
            <div class="item">
              <div class="image-container">
                <img src="../../assets/images/landing-page/empower-your-business/reputation-management.png" />
              </div>
              <p>Reputation Management</p>
            </div>
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

#empower-your-business
  .container
    padding-top: 0px
    .content-container
      h2
        @include large-yellow-header-butler
        text-align: center
      .yellow-underline
        width: 30%
        height: 2px
        background: -webkit-linear-gradient($dark-yellow, $light-yellow)
        display: block
        margin: 20px auto 40px auto
      .item-list-container
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        .item-container
          flex: 0 0 19%
          background: $dark-green
          box-sizing: border-box
          filter: drop-shadow(10px 10px 2px black)
          border-radius: 8px
          padding: 0 20px
          +mobile
            flex: 0 0 48%
            margin-bottom: 20px
          .item
            padding: 20px
            .image-container
              display: flex
              justify-content: center
              margin-bottom: 20px
              img
                max-width: 100%
            p
              @include regular-white-nourd
              text-align: center
</style>
