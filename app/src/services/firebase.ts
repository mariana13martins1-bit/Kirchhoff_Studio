import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMgQHLzldz9bQEBOxUgy7E1sWvwbIegaM",
  authDomain: "kirchhoffstudio.firebaseapp.com",
  projectId: "kirchhoffstudio",
  storageBucket: "kirchhoffstudio.appspot.com",
  messagingSenderId: "100671286834",
  appId: "1:100671286834:web:6709a580ee017036da162b",
  measurementId: "G-E7L3P60ZGK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let analytics: Analytics | undefined;
let logEventFn: typeof import("firebase/analytics").logEvent | undefined;

// Loaded lazily and swallowed on failure — ad blockers commonly block this
// chunk (URL contains "analytics"), and a failed static import here would
// otherwise crash the entire app's module graph before anything renders.
import("firebase/analytics")
  .then(async (mod) => {
    if (await mod.isSupported()) {
      analytics = mod.getAnalytics(app);
      logEventFn = mod.logEvent;
    }
  })
  .catch(() => {});

export function logAnalyticsEvent(eventName: string, params?: Record<string, unknown>) {
  if (analytics && logEventFn) {
    logEventFn(analytics, eventName, params);
  }
}