const today = new Date();

const day = today.getDate(); // 24
const month = today.getMonth(); // 10 (Month is 0-based, so 10 means 11th Month)
const year = today.getFullYear();

const hours = today.getHours(); // 15 (0-23)
const minutes = today.getMinutes();

const reformat = (time: number) => (time < 10 ? `0${time}` : time);

export const formatCurrentDate = `${reformat(day)}/${reformat(month)}/${year} ${reformat(hours)}:${reformat(minutes)}`;
