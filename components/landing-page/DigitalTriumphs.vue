<script setup>
const hoverActiveList = ref({
  expovan: false,
  roberto: false,
  envi: false,
});

const shrinkOthers = ref(false);

function onHoverTestimony(slug) {
  hoverActiveList.value[slug] = true;
  shrinkOthers.value = true;
}

function onLeaveHoverTestimony(slug) {
  hoverActiveList.value[slug] = false;
  shrinkOthers.value = false;
}
</script>

<template>
  <div id="digital-triumphs">
    <div class="container section">
      <div class="testimony-container">
        <h2 class="title">Digital Triumphs.</h2>
        <div class="yellow-underline" />
        <div class="testimony-list-container">
          <div
            class="testimony-item-container"
            :class="{
              'hover-active': hoverActiveList['expovan'],
              'hover-other-active': shrinkOthers && !hoverActiveList['expovan'],
            }"
          >
            <div
              class="testimony-item"
              @mouseover="onHoverTestimony('expovan')"
              @mouseleave="onLeaveHoverTestimony('expovan')"
            >
              <div class="top-container">
                <!-- <div class="quote-container">
                  <h3>"</h3>
                </div> -->
                <p>Working with Artemiz has been a game-changer for our company. Their strategic PR efforts have consistently yielded outstanding results.</p>
                <div class="star-container">
                  <v-icon
                    :key="i"
                    class="icon"
                    icon="mdi-star"
                    v-for="i in 5"
                  />
                </div>
              </div>

              <div class="bottom-container">
                <img src="../../assets/images/landing-page/digital-triumphs/expovan.png" />
                <h3>Expovan</h3>
              </div>
            </div>
          </div>

          <div
            class="testimony-item-container"
            :class="{
              'hover-active': hoverActiveList['roberto'],
              'hover-other-active': shrinkOthers && !hoverActiveList['roberto'],
            }"
          >
            <div
              class="testimony-item"
              @mouseover="onHoverTestimony('roberto')"
              @mouseleave="onLeaveHoverTestimony('roberto')"
            >
              <div class="top-container">
                <p>Artemiz's creative approach and attention to detail have truly set them apart in the world of PR. We couldn't be happier with the impact they've had on our behalf.</p>
                <div class="star-container">
                  <v-icon
                    :key="i"
                    class="icon"
                    icon="mdi-star"
                    v-for="i in 5"
                  />
                </div>
              </div>

              <div class="bottom-container">
                <img src="../../assets/images/landing-page/digital-triumphs/roberto.png" />
                <h3>Roberto's 1020</h3>
              </div>
            </div>
          </div>

          <div
            class="testimony-item-container"
            :class="{
              'hover-active': hoverActiveList['envi'],
              'hover-other-active': shrinkOthers && !hoverActiveList['envi'],
            }"
          >
            <div
              class="testimony-item"
              @mouseover="onHoverTestimony('envi')"
              @mouseleave="onLeaveHoverTestimony('envi')"
              :class="{
                'hover-active': hoverActiveList['envi'],
                'hover-other-active': shrinkOthers && !hoverActiveList['envi'],
              }"
            >
              <div class="top-container">
                <p>Artemiz took our vision and transformed it into a powerful PR strategy that exceeded our expectations. Their professionalism and commitment are unmatched.</p>
                <div class="star-container">
                  <v-icon
                    :key="i"
                    class="icon"
                    icon="mdi-star"
                    v-for="i in 5"
                  />
                </div>
              </div>

              <div class="bottom-container">
                <img src="../../assets/images/landing-page/digital-triumphs/envi.png" />
                <h3>Envi Sky Dining</h3>
              </div>
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

#digital-triumphs
  .container
    .testimony-container
      .title
        @include large-yellow-header-butler
        text-align: center
      .yellow-underline
        width: 30%
        height: 2px
        background: -webkit-linear-gradient($dark-yellow, $light-yellow)
        display: block
        margin: 20px auto 40px auto
      .testimony-list-container
        display: flex
        justify-content: space-between
        +mobile
          flex-direction: column
        .testimony-item-container
          flex: 0 0 31%
          transition: 0.25s all
          +mobile
            flex: 0 0 100%
            margin-bottom: 20px
          &.hover-active
            +desktop
              flex: 0 0 48%
              transition: 0.25s all
            .testimony-item
              p
                +desktop
                  font-size: 34px
                  line-height: 48px
              img
                +desktop
                  height: 160px
              h3
                +desktop
                  font-size: 44px
                  line-height: 58px
          &.hover-other-active
            +desktop
              flex: 0 0 23%
              transition: 0.25s all
            .testimony-item
              +desktop
                height: 70%
                transition: 0.25s all
              p
                +desktop
                  font-size: 13px
                  line-height: 26px
              img
                +desktop
                  height: 80px
              h3
                +desktop
                  font-size: 16px
                  line-height: 28px

          .testimony-item
            background-color: $dark-green
            padding: 40px
            border-radius: 12px
            filter: drop-shadow(10px 10px 2px black)
            height: 100%
            transition: 0.25s all
            display: flex
            flex-direction: column
            max-height: 100%
            .top-container
              flex: 1
              transition: 0.25s all
              .star-container
                margin-top: 40px
                display: flex
                justify-content: center
                .icon
                  color: $dark-yellow
            .bottom-container
              transition: 0.25s all
            p
              @include regular-white-nourd
              transition: 0.25s all
              text-align: center
            img
              border-radius: 50%
              border: 2px solid $dark-yellow
              display: block
              margin: 40px auto 0 auto
              height: 120px
              transition: 0.25s all
            h3
              @include medium-yellow-header-butler
              text-align: center
              margin-top: 20px
              transition: 0.25s all
              font-size: 28px
              line-height: 40px
</style>
