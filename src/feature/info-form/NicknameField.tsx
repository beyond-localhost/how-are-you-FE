import React, { useState } from 'react';
import { Nickname, setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface NicknameFormProp extends setCurInfoByKeyParam {
    recommendNickname: string;
    nickname: Nickname;
}

const NicknameField: React.FC<NicknameFormProp> = ({
    setCurInfoByKey,
    recommendNickname,
    nickname
}) => {
    const [recommendCheck, setRecommendCheck] = useState(false);

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCurInfoByKey({ key: e.target.id, value });

        if (recommendCheck && value !== recommendNickname) {
            setRecommendCheck(false);
        }
    };

    const handleRecommendCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        if (checked) {
            setCurInfoByKey({ key: 'nickname', value: recommendNickname });
        }

        setRecommendCheck(checked);
    };

    return (
        <>
            <label htmlFor="nickname">닉네임</label>
            <input
                id="nickname"
                autoFocus
                maxLength={20}
                placeholder="닉네임을 입력해주세요"
                onChange={handleNicknameChange}
                value={nickname}
            />
            <div>
                <input
                    type="checkbox"
                    id="recommendNickname"
                    onChange={handleRecommendCheck}
                    checked={recommendCheck}
                />
                <label htmlFor="recommendNickname">추천 닉네임 사용하기: {recommendNickname}</label>
            </div>
        </>
    );
};

export default NicknameField;
