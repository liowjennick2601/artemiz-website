import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  const ref = firestore.doc(`products/71n2pFR5jhPfS1efWAu0`);
  const snapshot = await ref.get();
  const data = snapshot.data();
  return data;
});
