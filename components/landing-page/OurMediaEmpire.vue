<script setup></script>

<template>
  <div id="our-media-empire">
    <div class="container section">
      <h2 class="title">Our Media Empire</h2>
      <p class="subtitle">Explore the captivating world of Getaran and The Vibes, where cutting-edge content meets unparelleled storytelling, all under one digital roof.</p>

      <div class="featured-media-section">
        <div class="featured-media-list-container">
          <div class="featured-media-container">
            <img
              class="logo"
              src="../../assets/images/landing-page/our-media-empire/getaran-logo.png"
            />
            <a
              href="https://www.getaran.my/"
              target="_blank"
            >
              <img
                class="featured-image"
                src="../../assets/images/landing-page/our-media-empire/getaran-feature.png"
              />
            </a>
            <p class="readership-count">8,000,000+</p>
            <p class="readership">Readership</p>
          </div>

          <div class="featured-media-container">
            <img
              class="logo"
              src="../../assets/images/landing-page/our-media-empire/the-vibes-logo.png"
            />
            <a
              href="https://www.thevibes.com/"
              target="_blank"
            >
              <img
                class="featured-image"
                src="../../assets/images/landing-page/our-media-empire/the-vibes-feature.png"
              />
            </a>
            <p class="readership-count">120,000,000+</p>
            <p class="readership">Readership</p>
          </div>

          <div class="featured-media-container">
            <img
              class="logo"
              src="../../assets/images/landing-page/our-media-empire/the-malaysian-insight-logo.png"
            />
            <a
              href="https://www.themalaysianinsight.com/"
              target="_blank"
            >
              <img
                class="featured-image"
                src="../../assets/images/landing-page/our-media-empire/the-malaysian-insight-feature.png"
              />
            </a>
            <p class="readership-count">120,000,000+</p>
            <p class="readership">Readership</p>
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

#our-media-empire
  .container
    background-color: $dark-green
    .title
      @include large-yellow-header-butler
      text-align: center
      margin-bottom: 10px
    .subtitle
      @include regular-white-nourd
      text-align: center
      padding: 0 120px
      +mobile
        padding: 0
      margin-bottom: 80px
    .featured-media-section
      .featured-media-list-container
        display: flex
        justify-content: space-evenly
        flex-wrap: wrap
        .featured-media-container
          flex: 0 0 32.5%
          +mobile
            flex: 0 0 100%
            margin-bottom: 80px
          .logo
            height: 60px
            display: block
            margin: 0 auto
            +mobile
              height: auto
              width: 200px
          .featured-image
            width: 100%
            padding: 0 20px
            margin-top: 20px
            margin-bottom: 20px
            filter: drop-shadow(10px 10px 2px black)
          .readership-count
            text-align: center
            @include regular-yellow-butler-bold
          .readership
            text-align: center
            @include regular-white-nourd
</style>
