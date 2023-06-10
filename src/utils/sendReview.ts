import { getValueFromLS } from './getValueFromLS';

interface ReviewType {
  name: string;
  phone: string;
  email: string;
  category: string | null;
  target: string | null;
  reviewText: string;
}

export const sendReview = (text: string) => {
  const name = getValueFromLS('name') ?? 'не указано';
  const phone = getValueFromLS('phone') ?? 'не указано';
  const email = getValueFromLS('email') ?? 'не указано';
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');

  const review: ReviewType = {
    name,
    phone,
    email,
    category,
    target,
    reviewText: text
  };

  void fetch('https://reviews-tg-proxy.onrender.com/wasabi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });
};
