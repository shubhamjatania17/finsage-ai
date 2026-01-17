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

export async function getLessonMemory(uid) {
  const snap = await db.collection("lessonMemory").doc(uid).get();
  return snap.exists ? snap.data() : null;
}

export async function updateLessonMemory(uid, data) {
  await db.collection("lessonMemory").doc(uid).set(data, { merge: true });
}

