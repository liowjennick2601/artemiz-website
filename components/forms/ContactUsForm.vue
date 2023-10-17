<script setup>
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { doc, setDoc } from "firebase/firestore";

// FORM VALUES
const formData = reactive({
  email: "",
  message: "",
});

// FORM VALIDATIONS
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    message: {
      required: helpers.withMessage("This field is required", required),
    },
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
    <h1>Contact Us Form</h1>
    <div>{{ formData }}</div>
    <div>
      <div class="">
        <h3>Email</h3>
        <input
          v-model="formData.email"
          placeholder="Enter your email here"
          @change="v$.email.$touch"
        />
        <div
          class="validation-error-container"
          v-if="v$.email.$error && v$.email.$dirty"
        >
          <p class="validation-error">{{ v$.email.$errors[0].$message }}</p>
        </div>
      </div>

      <div class="">
        <h3>Message</h3>
        <input
          v-model="formData.message"
          placeholder="Enter message here"
          @change="v$.message.$touch"
        />
        <div
          class="validation-error-container"
          v-if="v$.message.$error && v$.message.$dirty"
        >
          <p class="validation-error">{{ v$.message.$errors[0].$message }}</p>
        </div>
      </div>

      <div
        @click="submitContactUsForm"
        class="submit-button"
      >
        <p>Submit</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
#contact-us
  h3
    margin-bottom: 5px
</style>
