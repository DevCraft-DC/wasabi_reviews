export const getValueFromLS = (value: string) =>
  localStorage.getItem(value) !== null ? localStorage.getItem(value) : null;
