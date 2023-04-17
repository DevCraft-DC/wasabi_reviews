interface TemplateValues {
  username: string | null;
  phone: string | null;
  email: string | null;
  review: string;
  category: string | null;
  target: string | null;
}

export const createTemplate = ({
  username,
  phone,
  email,
  review,
  category,
  target
}: TemplateValues) => {
  const food = `- Категория: Еда
- Наименование: ${target !== null ? target : ''}
- Текст: ${review}`;

  const staff = `- Категория: Персонал
- Имя: ${target !== null ? target : ''}
- Текст: ${review}`;

  const other = `- Категория: Другое
- Текст: ${review}`;

  const whichCategory = category === 'Другое' ? other : category === 'Еда' ? food : staff;

  return `Отправитель: 
- Имя: ${username !== null ? username : 'не указано'}
- Номер телефона: ${phone !== null ? phone : 'не указано'}
- Почта: ${email !== null ? email : 'не указано'}
  
Отзыв:
${whichCategory}`;
};
