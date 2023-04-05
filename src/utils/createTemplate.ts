interface TemplateValues {
  username: string | null;
  phone: string | null;
  review: string;
  category: string | null;
  name: string;
}

export const createTemplate = ({ username, phone, review, category, name }: TemplateValues) => {
  const whichCategory =
    category === 'other'
      ? `- Текст: ${review}`
      : `- Категория: ${category !== null ? category : ''}%0A - Имя: ${name}%0A - Текст: ${review}`;

  return `Отправитель: %0A - Имя: ${
    username !== null ? username : 'не указано'
  }%0A - Номер телефона: ${phone !== null ? phone : 'не указано'}%0A%0AОтзыв:%0A ${whichCategory}`;
};
