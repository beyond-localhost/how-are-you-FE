import { paths } from '@lib/api/api';

export interface InfoParam {
    key: string;
    value: string | number;
}

export interface setCurInfoByKeyParam {
    setCurInfoByKey: ({ key, value }: InfoParam) => void;
}

export type Jobs = paths['/jobs']['get']['responses']['200']['content']['application/json'];
export type Worries = paths['/worries']['get']['responses']['200']['content']['application/json'];
