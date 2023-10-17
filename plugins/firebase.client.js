import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyC56Xco0gOiulxf5UE83YRwEp09XCS7_Pg",
    authDomain: "artemiz-7c2c2.firebaseapp.com",
    databaseURL: "https://artemiz-7c2c2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "artemiz-7c2c2",
    storageBucket: "artemiz-7c2c2.appspot.com",
    messagingSenderId: "383373179656",
    appId: "1:383373179656:web:1d776f6e9b2a9711788abd",
    measurementId: "G-EBJME97PL2",
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
