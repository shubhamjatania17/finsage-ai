import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seed() {
  const uid = "demo-user-001";

  await db.collection("users").doc(uid).set({
    name: "Demo User",
    email: "demo@finsage.ai"
  });

  await db.collection("users").doc(uid)
    .collection("memory")
    .doc("profile")
    .set({
      investingStyle: "Long-term value investor",
      spendingBehavior: "High food & subscriptions"
    });

  console.log("🌱 Firestore seeded");
  process.exit(0);
}

seed();
