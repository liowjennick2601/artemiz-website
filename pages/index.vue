<script setup>
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

const nuxtApp = useNuxtApp();

// const { data: serverData } = useFetch("/api/products");

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
  <!-- <h2>{{ stuff }}</h2>
  <h2>{{ test }}</h2>
  <h1 @click="changeValue">Home Page</h1> -->
  <h1>Up yours</h1>
</template>
