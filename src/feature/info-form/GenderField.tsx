import { GENDER, SELECT_TITLE_TEXT } from '@/constants/form.ts';
import React from 'react';
import { Gender, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';
import {
    GenderInputRadio,
    GenderInputIconBox,
    GenderInputWrapper,
    GenderSelection
} from '@feature/info-form/styles/GenderField.style.tsx';
import { TextLabel } from '@components/text/Text.tsx';
import { GenderMaleIcon } from '@components/icons/GenderMaleIcon.tsx';
import { GenderFemaleIcon } from '@components/icons/GenderFemaleIcon.tsx';
import { XIcon } from '@components/icons/XIcon.tsx';
import { mauve } from '@/tokens/color.ts';

interface GenderFormProp extends setCurInfoByKeyParam {
    gender: Gender;
}

const GenderField: React.FC<GenderFormProp> = ({ setCurInfoByKey, gender }) => {
    const handleGenderCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurInfoByKey({ key: 'gender', value: e.target.id });
    };

    return (
        <>
            <InputTitle>{'성별' + SELECT_TITLE_TEXT}</InputTitle>

            <GenderInputWrapper>
                {GENDER.map(item => {
                    const { id, label } = item;
                    const isChecked = gender === id;
                    return (
                        <GenderSelection key={id}>
                            <GenderInputRadio
                                type="radio"
                                id={id}
                                checked={isChecked}
                                onChange={handleGenderCheck}
                            />
                            <GenderInputIconBox htmlFor={id}>
                                {id === 'male' ? (
                                    <GenderMaleIcon isChecked={isChecked} />
                                ) : id === 'female' ? (
                                    <GenderFemaleIcon isChecked={isChecked} />
                                ) : (
                                    <XIcon isChecked={isChecked} />
                                )}
                            </GenderInputIconBox>
                            <TextLabel htmlFor={id} size={3} weight={'bold'} color={mauve['12']}>
                                {label}
                            </TextLabel>
                        </GenderSelection>
                    );
                })}
            </GenderInputWrapper>
        </>
    );
};

export default GenderField;
