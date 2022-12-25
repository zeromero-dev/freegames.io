export const checkIfToday = (publishedDate: string): boolean => {
    const date = new Date(publishedDate);
    const currentDate = new Date();

    return date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate();
}
