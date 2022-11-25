export const getCurrentDate = (): string => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${day}/${month}/${year}, ${hours}:${minutes}`;
};
