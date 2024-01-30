export const categoryIds: { [index: string]: number } = {
  index: 0,
  fashion: 3,
  technologies: 1,
  sport: 2,
  karpov: 6,
};

export const categoryNames: { [index: string]: string } = {
  index: 'Главная',
  fashion: 'Мода',
  technologies: 'Технологии',
  sport: 'Спорт',
  karpov: 'Karpov',
};

export const getFormatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: '2-digit' });
};
