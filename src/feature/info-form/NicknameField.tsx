import React, { useState } from 'react';
import { Nickname, RecommendNickname, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import {
    NicknameCheckbox,
    NicknameCheckboxLabel,
    NicknameCheckboxWrapper,
    NicknameInput
} from '@feature/info-form/styles/NicknameField.style.tsx';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';
import { TextLabel } from '@components/text/Text.tsx';
import { violet } from '@/tokens/color.ts';
import { SELECT_TITLE_TEXT } from '@/constants/form.ts';

interface NicknameFieldProp extends setCurInfoByKeyParam {
    recommendNicknameData: RecommendNickname;
    nickname: Nickname;
}

const ELEMENT_ID = {
    NICKNAME: 'nickname',
    RECOMMEND_NICKNAME: 'recommendNickname'
};

const NicknameField: React.FC<NicknameFieldProp> = ({
    setCurInfoByKey,
    recommendNicknameData,
    nickname
}) => {
    const [recommendCheck, setRecommendCheck] = useState(false); // 추천닉네임 선택 여부

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setCurInfoByKey({ key: target.id, value: target.value });

        if (recommendCheck && target.value !== recommendNicknameData) {
            setRecommendCheck(false);
        }
    };

    const handleRecommendCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isRecommendChecked = e.target.checked;
        if (isRecommendChecked) {
            setCurInfoByKey({ key: ELEMENT_ID.NICKNAME, value: recommendNicknameData });
        }

        setRecommendCheck(isRecommendChecked);
    };

    return (
        <>
            <InputTitle htmlFor={ELEMENT_ID.NICKNAME}>{'닉네임' + SELECT_TITLE_TEXT}</InputTitle>
            <NicknameInput
                id={ELEMENT_ID.NICKNAME}
                autoFocus
                maxLength={20}
                placeholder="닉네임을 입력해주세요"
                onChange={handleNicknameChange}
                value={nickname}
            />

            <NicknameCheckboxWrapper>
                <NicknameCheckbox
                    type="checkbox"
                    id={ELEMENT_ID.RECOMMEND_NICKNAME}
                    onChange={handleRecommendCheck}
                    checked={recommendCheck}
                />
                <NicknameCheckboxLabel
                    htmlFor={ELEMENT_ID.RECOMMEND_NICKNAME}
                ></NicknameCheckboxLabel>
                <TextLabel
                    htmlFor={ELEMENT_ID.RECOMMEND_NICKNAME}
                    size={3}
                    weight={'medium'}
                    color={violet['12']}
                >
                    추천 닉네임 사용하기: {recommendNicknameData}
                </TextLabel>
            </NicknameCheckboxWrapper>
        </>
    );
};

export default NicknameField;
