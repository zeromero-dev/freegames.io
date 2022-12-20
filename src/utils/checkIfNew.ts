export const checkIfNew = (publishedDate: string): boolean => {
  const date = new Date(publishedDate);
  const currentDate = new Date();

  const differenceInDays = (currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24);

return (differenceInDays >= 0 && differenceInDays <= 6)
}


