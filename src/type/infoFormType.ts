import { paths } from '@lib/api/api';

// 입력폼 value 타입
export type Nickname = string;
export type Gender = number;
export type Birth = Record<BirthKey, number>;
export type Job = number;
export type Worry = number[];

export type BirthKey = 'year' | 'month' | 'day';

export interface InfoParam {
    key: string;
    value: Nickname | Gender | Birth | Job | Worry;
}

export interface setCurInfoByKeyParam {
    setCurInfoByKey: ({ key, value }: InfoParam) => void;
}

// 입력폼 api 응답 타입
export type NicknameData =
    paths['/recommendation_nickname']['get']['responses']['200']['content']['application/json'];
export type Jobs = paths['/jobs']['get']['responses']['200']['content']['application/json']['jobs'];
export type Worries =
    paths['/worries']['get']['responses']['200']['content']['application/json']['worries'];
