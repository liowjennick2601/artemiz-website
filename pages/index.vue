<script setup>
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import ContactUsForm from "../components/forms/ContactUsForm.vue";
import OurMediaEmpire from "~/components/landing-page/OurMediaEmpire.vue";
import OurXFactor from "~/components/landing-page/OurXFactor.vue";
import SpotlightHub from "~/components/landing-page/SpotlightHub.vue";
import ElevatingExcellence from "~/components/landing-page/ElevatingExcellence.vue";
import TheArtOfArtemiz from "~/components/landing-page/TheArtOfArtemiz.vue";
import DigitalTriumphs from "~/components/landing-page/DigitalTriumphs.vue";
import AiEfficiency from "~/components/landing-page/AiEfficiency.vue";
import YesWeMadeOurOwnAi from "~/components/landing-page/YesWeMadeOurOwnAi.vue";
import EmpowerYourBusiness from "~/components/landing-page/EmpowerYourBusiness.vue";

const nuxtApp = useNuxtApp();

let headData;

const test = ref("2");

const stuff = ref(
  await useAsyncData("api/products", async () => {
    const { data: productData } = await useFetch("/api/products");
    console.log(productData.value);
    headData = {
      title: productData.value.name,
      meta: {
        property: "og:url",
        content: "example.com",
      },
    };

    return {
      headData,
    };
  })
);

useHead(headData);

function changeValue() {
  stuff.value = "3";
}
</script>

<template>
  <div
    id="landing-page"
    class="background-gradient-green-light-to-dark"
  >
    <!-- <h2>{{ stuff }}</h2>
  <h2>{{ test }}</h2>
  <h1 @click="changeValue">Home Page</h1>
  <h1>Up yours</h1> -->

    <TheArtOfArtemiz />
    <EmpowerYourBusiness />
    <YesWeMadeOurOwnAi />
    <AiEfficiency />
    <DigitalTriumphs />
    <ElevatingExcellence />
    <OurMediaEmpire />
    <OurXFactor />
    <SpotlightHub />
    <ContactUsForm />
  </div>
</template>

<style lang="sass">
@import "../assets/sass/variables"
@import "../assets/sass/global"
</style>
