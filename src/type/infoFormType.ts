export interface InfoParam {
    key: string;
    value: string;
}

export interface setCurInfoByKeyParam {
    setCurInfoByKey: ({ key, value }: InfoParam) => void;
}
