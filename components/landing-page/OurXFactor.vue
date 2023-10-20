<script setup></script>

<template>
  <div id="our-x-factor">
    <div class="container section">
      <div class="precision-audience-targeting-section">
        <div class="left-container">
          <h2 class="title">Our X Factor.</h2>
          <div class="yellow-underline" />
          <h3 class="small-title">Precision Audience Targeting</h3>
          <p>Our agency's AI Precision Audience Targeting leverages cutting-edge machine learning algorithms to analyse and understand the unique preferences and behaviours of your audience, ensuring a highly accurate and data-driven approach as opposed to 'best guess' practices. Say goodbye to guesswork and hello to data-driven success.</p>
        </div>

        <div class="right-container">
          <img src="../../assets/images/landing-page/our-x-factor/precision-audience-targeting.png" />
        </div>
      </div>

      <div class="we-care-about-results-section">
        <div class="left-container">
          <img src="../../assets/images/landing-page/our-x-factor/we-care-about-results.png" />
        </div>

        <div class="right-container">
          <h3 class="small-title">We care about Results, not Cost Reduction</h3>
          <p>Our agency's Results Focues approach prioritises achieving specific, measurable outcomes that drive growth and success for our clients, ensuring that every strategy and effort is aligned with their business goals. In contreast, other agencies may solely focus on cost reduction, which can sometimes compromise the quality and effectiveness of marketing efforts, potentially hidering long-term success.</p>
        </div>
      </div>

      <div class="in-a-league-of-our-own-section">
        <div class="left-container">
          <h3 class="small-title">In A League<br />Of Our Own</h3>
          <p>Precision targeting, near instant A/B testing &amp; market segmentation, strategic social media campaigns and data-driven insights are just some of the many ways we make every cent count and go the distance in achieving your brands objectives. Harnessing the potential of Artificial Intelligence allows it to supercharge your marketing strategies, putting you ahead of the pack.</p>
        </div>

        <div class="right-container">
          <img src="../../assets/images/landing-page/our-x-factor/in-a-league-of-our-own.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../../assets/sass/variables"
@import "../../assets/sass/global"
@import "../../assets/sass/fonts"

#our-x-factor
  .container
    .small-title
      @include medium-yellow-header-butler
      margin-bottom: 20px
    p
      @include regular-white-nourd
    .precision-audience-targeting-section, .in-a-league-of-our-own-section
      position: relative
      margin-bottom: 20px
      .yellow-underline
        width: 27%
        height: 2px
        background: -webkit-linear-gradient($dark-yellow, $light-yellow)
        margin-bottom: 40px
      .title
        @include large-yellow-header-butler
        padding-bottom: 20px
      .left-container
        width: 70%
        background-color: $dark-green
        padding: 80px 220px 80px 80px
      .right-container
        position: absolute
        width: 40%
        right: 50px
        top: 50%
        transform: translateY(-50%)
        img
          width: 80%

    .we-care-about-results-section
      position: relative
      margin-bottom: 20px
      .title
        @include large-yellow-header-butler
        padding-bottom: 20px
      .left-container
        width: 40%
        z-index: 2
        img
          width: 40%
          position: absolute
          top: 50%
          transform: translateY(-50%)
      .right-container
        width: 70%
        z-index: 1
        margin-left: auto
        padding: 80px 80px 80px 220px
        background-color: $dark-green
</style>
