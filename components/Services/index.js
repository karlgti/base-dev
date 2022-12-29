import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from 'firebaseConfig';

export const sendContactForm = async ({
  firstName,
  lastName,
  companyTitle,
  companyEmail,
  country,
  describe,
  services,
  message,
}) => {
  try {
    const ref = collection(firestore, 'Contact Us Form');
    await addDoc(ref, {
      firstName,
      lastName,
      companyTitle,
      companyEmail,
      country,
      describe,
      services,
      message,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
