import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';
import { db, analytics } from '../services/firebase';

const reportedThisSession = new Set<string>();

export async function reportBrokenImage(imageUrl: string, title: string, category: string) {
  if (reportedThisSession.has(imageUrl)) return;
  reportedThisSession.add(imageUrl);

  logEvent(analytics, 'image_load_error', { title, category });

  const docId = encodeURIComponent(imageUrl).slice(0, 500);
  try {
    await setDoc(doc(db, 'broken_images', docId), {
      imageUrl,
      title,
      category,
      detectedAt: serverTimestamp(),
    }, { merge: true });
  } catch {
    // silently fail — don't surface Firestore errors to visitors
  }
}
