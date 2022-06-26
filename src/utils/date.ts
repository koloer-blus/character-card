import dayjs from 'dayjs';

export const getCurrentYear = () => dayjs().year();

export const getAge = (birth: number) => getCurrentYear() - birth;