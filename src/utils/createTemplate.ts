interface TemplateValues {
  username: string | null;
  phone: string | null;
  review: string;
  category: string | null;
  target: string | null;
}

export const createTemplate = ({ username, phone, review, category, target }: TemplateValues) => {
  const food = `- Категория: Еда %0A- Наименование: ${
    target !== null ? target : ''
  }%0A- Текст: ${review}`;
  const staff = `- Категория: Персонал %0A- Имя: ${
    target !== null ? target : ''
  }%0A- Текст: ${review}`;
  const other = `- Категория: Другое %0A- Текст: ${review}`;

  const whichCategory = category === 'Другое' ? other : category === 'Еда' ? food : staff;

  return `Отправитель: %0A- Имя: ${
    username !== null ? username : 'не указано'
  }%0A- Номер телефона: ${phone !== null ? phone : 'не указано'}%0A%0AОтзыв:%0A${whichCategory}`;
};
