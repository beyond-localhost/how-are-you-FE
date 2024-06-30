// 성별 입력 값
import { BirthIdType } from '@type/infoFormType.ts';

export const GENDER = [
    { id: 'male', label: '남성' },
    { id: 'female', label: '여성' },
    { id: 'none', label: '선택안함' }
] as const;

// 생년월일 입력 값
export type BirthInput = {
    id: BirthIdType;
    label: string;
};
export const BIRTH_INPUT: BirthInput[] = [
    { id: 'year', label: '년' },
    { id: 'month', label: '월' },
    { id: 'day', label: '일' }
] as const;

export const SELECT_TITLE_TEXT = '을 선택해주세요';
