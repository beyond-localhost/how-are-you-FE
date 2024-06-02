// 입력폼 단계
export enum Step {
    Nickname,
    Gender,
    Birth,
    Job,
    Worry
}

// 성별 입력 값
export const GENDER = [
    { id: 'male', label: '남자' },
    { id: 'female', label: '여자' },
    { id: 'none', label: '선택안함' }
] as const;

// 생년월일 입력 값
export const BIRTH_INPUT = [
    { id: 'year', label: '년' },
    { id: 'month', label: '월' },
    { id: 'day', label: '일' }
] as const;
