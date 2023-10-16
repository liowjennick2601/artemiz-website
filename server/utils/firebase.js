import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const app = initializeApp({
  credential: cert({
    type: "service_account",
    project_id: "artemiz-7c2c2",
    private_key_id: "f9ba70aac29490ae3f7875dcf8eb2a1d41f1847e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLw309tZ1es+wd\nkv38QYalr0wayVu9rHe3Eym9YGCsO4enYTdC0p3Q0i4yLucj8oASXNHjTafcQjbX\niSrtxb/WC2b4+u5vgMrjhmYEMsHNi4GEdz1OfavxgtDN8vxA6XtxFpx51j83vNDK\nPvaUmr9RegVwpHG9OjGgDhlQONzfsnMQkrz72JFwiLEtPJeoDgJ1Pfw/GCUqGpEK\nxnUaU8LtitBz1l5Vrg3U7NknWA1ur1yF7uuqFqji7l2vZn3SWcI52CVXTTgWplLB\nK+IJEMeVVqL2Rg4Y+C0buVkN01wUhe84B//9zUqW6TO2t3S9b4X7PhduiI7q+DBe\nWA3sSPqvAgMBAAECggEACapPidp63n/LrBN0N2pRnWZVRn1VUV1ESHYrkq9m+9nP\nCMzUYY0QA1RqReMc/62EZFqWx3YVh53JxYDc0m6A4lb5dByjAWhV4g5WpHhWjQ4Y\nVKo7SY/Yf2+PFqsh9V+d2rK8irhI7gySHXsjGHrGpxy8nqfjj/BEuQIyMoX1TtRY\ndBAVAbWx2A+sTXg46GWBYHW5Jr56aWvEAcSzxEr6b9UQWiFTPxXMlBzDF6Ejy0IG\n6cQqWfqgx3r1mXsBs2BiyMkqLO7G7d9k+FOgnP5QVvGxSLn3LzrUY8E/baAvYykX\npa/h0XZkMgTO4d1Huetb6zIPpmGQtUZSNOnqUrMNkQKBgQDn7A4AQTRzSVUQRwRF\nwpV9UjQDqZN2UbWS6TDhOD/xhqbv0qpZh0tecQiaYX9IMI2MqybD7lKk3RRzyfP7\ncSDbhyF91QkA84ZCekUSjMWgeimOYd2MKu1LU1xql6hClqDA7BddZ76XyC+UH46w\n1/GskRMI68C3CFhXtq+kt83jcwKBgQDg6wx48cITP4Hi57bHcRpif2aCkJuXTScc\nv7+dWpO6/aHtUrDtxOlUCx4CyhwgLgGSRgXoiAYbrQtKNcV55MGW8Pl/pKpXXXUk\n/1E9WEHt9g+UhIyHioHTyjRfX9sU0wGNfAQ4aHkRiBh4xoZZWJVACFZpxgsPtF5W\njKMJ5wNU1QKBgQC4VC1slmaRmp85KLiEmXsm98bPgl/pkle2RBDNcF+iH1tfERjD\nv3xvu3cS/JqlTbGzM/TDlQ+qaOxwevqnxepPkL9Vu5REZUk4XOW5MJmCSpXszGvB\nk/y1+bNiJNde1Uk/DGYlnucky77FA6/tbjRu638tf/LThpZwYIqJaG0DcQKBgDyE\nwkxgsJnBQs+tDW9IrZLHOOv0wQjLB7UimwpZ7tonmMRktZqkmyuz+hVCEKNP/bhA\nAyL4Rrx3qUwEf+g2dyiIGnoP8o2jZfvYfyGEd+jxhmut5qopyJkWFVV8U1SdGhPZ\nxMDwy3K+LeeBc3Di9vXNyIKZeSx2mdOr78qgUDMpAoGALsdhBwlAfMSv5IQArF4N\nxmg3b83z6433zXBpcBjnz6yNxs+TGdcrrWM435J5qrJNmmwE/B/2Z/qcCkSkkTeZ\ndKD+qDV86tPi5o4S0w2LAKz4GXEZ1nl3b5t6ySgceXtAk2yJ4YnMhl/PluB27DNF\ny2/nnk7jcS/+iuXzKvrN0fQ=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-stvsc@artemiz-7c2c2.iam.gserviceaccount.com",
    client_id: "100028317020913120481",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-stvsc%40artemiz-7c2c2.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

export const firestore = getFirestore();
