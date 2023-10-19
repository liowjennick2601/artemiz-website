<script setup>
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { doc, setDoc } from "firebase/firestore";

// FORM VALUES
const formData = reactive({
  name: "",
  email: "",
  phone_country_code: "+60",
  phone_number: "",
  company_size: null,
  your_website: "",
  message: "",
});

// FORM VALIDATIONS
const rules = computed(() => {
  return {
    name: {
      require: helpers.withMessage("This field is required", required),
    },
    email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    phone_country_code: {
      require: helpers.withMessage("This field is required", required),
    },
    phone_number: {
      require: helpers.withMessage("This field is required", required),
    },
    company_size: {
      require: helpers.withMessage("This field is required", required),
    },
    your_website: {
      require: helpers.withMessage("This field is required", required),
    },
    message: {},
  };
});

// VUELIDATE
const v$ = useVuelidate(rules, formData);

const nuxtApp = useNuxtApp();
async function submitContactUsForm() {
  try {
    v$.value.$validate();
    console.log("After validate");

    console.log(nuxtApp.$firestore);

    if (!v$.value.$error) {
      const contactUsFormRef = doc(nuxtApp.$firestore, "ContactUsForms", formData.email + " " + new Date().valueOf());

      await setDoc(contactUsFormRef, {
        email: formData.email,
        message: formData.message,
        created_at: new Date(),
      });

      console.log("Submitted");
    }
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div id="contact-us">
    <div class="container">
      <div class="left-container">
        <h3 class="mb-4">
          Scale Your <br />
          Revenue 10x Faster<br />
          Than In-House
        </h3>
        <p>Fill out this form and we will call you to understand your business and your goals. If we can help you, we will develop a free customised digital marketing strategy.</p>
      </div>

      <div class="right-container">
        <div id="contact-us-form">
          <div class="input-container">
            <v-text-field
              label="Name*"
              hide-details="auto"
              v-model="formData.name"
              class="vuetify-text-input"
              @change="v$.name.$touch"
              :error-messages="v$.name.$error && v$.name.$dirty ? v$.name.$errors[0].$message : ''"
            ></v-text-field>
          </div>

          <div class="input-container">
            <v-text-field
              label="Work Email*"
              hide-details="auto"
              v-model="formData.email"
              class="vuetify-text-input"
              @change="v$.email.$touch"
              :error-messages="v$.email.$error && v$.email.$dirty ? v$.email.$errors[0].$message : ''"
            ></v-text-field>
          </div>

          <div class="input-container phone-input-container">
            <v-select
              label="Code"
              :items="['+60', '+61']"
              hide-details="auto"
              v-model="formData.phone_country_code"
              class="vuetify-text-input country-code-input"
              @change="v$.phone_country_code.$touch"
              :error-messages="v$.phone_country_code.$error && v$.phone_country_code.$dirty ? v$.phone_country_code.$errors[0].$message : ''"
            ></v-select>

            <v-text-field
              label="Phone Number*"
              hide-details="auto"
              v-model="formData.phone_number"
              class="vuetify-text-input phone-number-input"
              @change="v$.phone_number.$touch"
              :error-messages="v$.phone_number.$error && v$.phone_number.$dirty ? v$.phone_number.$errors[0].$message : ''"
            ></v-text-field>
          </div>

          <div class="input-container">
            <v-text-field
              label="Your Website*"
              hide-details="auto"
              v-model="formData.your_website"
              class="vuetify-text-input"
              @change="v$.your_website.$touch"
              :error-messages="v$.your_website.$error && v$.your_website.$dirty ? v$.your_website.$errors[0].$message : ''"
            ></v-text-field>
          </div>

          <div class="input-container">
            <v-select
              label="Company Size*"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              hide-details="auto"
              v-model="formData.company_size"
              class="vuetify-text-input"
              @change="v$.company_size.$touch"
              :error-messages="v$.company_size.$error && v$.company_size.$dirty ? v$.company_size.$errors[0].$message : ''"
            ></v-select>
          </div>

          <div class="input-container">
            <v-text-field
              label="Message"
              hide-details="auto"
              v-model="formData.message"
              class="vuetify-text-input"
              @change="v$.message.$touch"
              :error-messages="v$.message.$error && v$.message.$dirty ? v$.message.$errors[0].$message : ''"
            ></v-text-field>
          </div>
        </div>

        <div
          @click="submitContactUsForm"
          class="submit-button"
        >
          <p>YES, INCREASE MY AUDIENCE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import './assets/sass/responsive'
#contact-us
  padding: 80px 0
  // background: rgb(0,36,27)
  // background: linear-gradient(90deg, rgba(0,36,27,1) 0%, rgba(9,121,51,1) 100%)
  .container
    display: flex
    +mobile
      flex-direction: column
    .left-container
      flex: 2
      padding-right: 40px
      +mobile
        padding-right: 0
        margin-bottom: 20px
      h3
        text-align: right
        +mobile
          text-align: left
      p
        text-align: right
        +mobile
          text-align: left
    .right-container
      flex: 3
      padding-left: 40px
      +mobile
        padding-left: 0px
      #contact-us-form
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        .input-container
          flex: 0 0 49%
          margin-bottom: 10px
          input
            background-color: transparent
            -webkit-appearance: none
            appearance: none
        .phone-input-container
          display: flex
          .country-code-input
            flex: 2
            border-radius: 0
          .phone-number-input
            flex: 4
      .submit-button
        border: 1px solid white
        padding: 10px 80px
        margin-top: 10px
        text-align: center
        border-radius: 8px
        cursor: pointer
        display: inline-block
        background-color: rgba(0,36,27,0.5)
        &:hover
          font-weight: 900
          border: 1px solid white


  h3
    font-family: "Butler"
    font-weight: 900
    margin-bottom: 5px
    color: yellow
    font-size: 42px
    line-height: 52px
    background: -webkit-linear-gradient(#e6b253, #fadeaa)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    -webkit-filter: drop-shadow(1px 2px 2px black)
  p
    color: white
    font-size: 16px
    line-height: 28px
    font-family: "Nourd"
    font-weight: 300

  .vuetify-text-input
    color: white
    background-color: transparent
</style>
