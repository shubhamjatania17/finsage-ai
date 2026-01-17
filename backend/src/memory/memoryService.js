import { db } from "../services/firebaseService.js";

export async function getUserMemory(userId) {
  const snap = await db
    .collection("users")
    .doc(userId)
    .collection("memory")
    .doc("profile")
    .get();

  return snap.exists ? snap.data() : {};
}

export async function saveUserMemory(userId, memory) {
  await db
    .collection("users")
    .doc(userId)
    .collection("memory")
    .doc("profile")
    .set(
      { ...memory, updatedAt: new Date() },
      { merge: true }
    );
}
