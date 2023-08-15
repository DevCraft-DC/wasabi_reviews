import { getValueFromLS } from './getValueFromLS';

const BASE_URL = 'https://reviews-tg-proxy.onrender.com/wasabi';

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

  void fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });
};
