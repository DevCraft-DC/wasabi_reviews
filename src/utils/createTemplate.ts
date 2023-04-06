interface TemplateValues {
  username: string | null;
  phone: string | null;
  review: string;
  category: string | null;
  target: string;
}

export const createTemplate = ({ username, phone, review, category, target }: TemplateValues) => {
  const whichCategory =
    category === 'Другое'
      ? `- Категория: ${category !== null ? category : ''}%0A- Текст: ${review}`
      : `- Категория: ${category !== null ? category : ''}%0A- Имя: ${target}%0A- Текст: ${review}`;

  return `Отправитель: %0A- Имя: ${
    username !== null ? username : 'не указано'
  }%0A- Номер телефона: ${phone !== null ? phone : 'не указано'}%0A%0AОтзыв:%0A${whichCategory}`;
};
