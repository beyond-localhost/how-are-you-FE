import { paths } from '@lib/api/api';

// 입력폼 value 타입
export type Nickname = string;
export type Gender = 'male' | 'female' | 'none';
export type Birth = Record<BirthIdType, number>;
export type Job = number;
export type Worry = Set<number>;

// 생년월일 입력폼
export type BirthIdType = 'year' | 'month' | 'day';
export type openedOptionType = BirthIdType | '';

export interface InfoParam {
    key: string;
    value: Nickname | Gender | Birth | Job | Worry;
}

export interface setCurInfoByKeyParam {
    setCurInfoByKey: ({ key, value }: InfoParam) => void;
}

// 입력폼 api 응답 타입
export type RecommendNickname =
    paths['/recommendation_nickname']['get']['responses']['200']['content']['application/json']['nickname'];
export type Jobs = paths['/jobs']['get']['responses']['200']['content']['application/json'];
export type Worries = paths['/worries']['get']['responses']['200']['content']['application/json'];
