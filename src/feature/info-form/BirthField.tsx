import { Birth, BirthKey, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React from 'react';
import { BIRTH_INPUT, SELECT_TITLE_TEXT } from '@/constants/form.ts';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';
import { BirthInputSelect, BirthInputWrapper } from '@feature/info-form/styles/Birth.style.tsx';

interface BirthFieldProp extends setCurInfoByKeyParam {
    birth: Birth;
}

const BirthField: React.FC<BirthFieldProp> = ({ setCurInfoByKey, birth }) => {
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newBirthObj = { ...birth, [e.target.id]: e.target.value };

        setCurInfoByKey({ key: 'birth', value: newBirthObj });
    };

    const getTargetDateInfo = (type: BirthKey) => {
        let optionLength = 0; // option 갯수
        let standardDate = 0; // 연, 월, 일별 기준 날짜

        const { year, month } = birth;

        switch (type) {
            case 'year':
                optionLength = 100;
                standardDate = new Date().getFullYear();
                break;
            case 'month':
                optionLength = 12;
                standardDate = 1;
                break;
            case 'day':
                optionLength = new Date(year, month, 0).getDate(); // 해당 연, 월의 일자
                standardDate = 1;
        }

        return { optionLength, standardDate };
    };

    return (
        <>
            <InputTitle>{'생년월일' + SELECT_TITLE_TEXT}</InputTitle>

            {BIRTH_INPUT.map(item => {
                const { id, label } = item;
                const { optionLength, standardDate } = getTargetDateInfo(id);

                return (
                    <BirthInputWrapper key={id}>
                        <BirthInputSelect id={id} value={birth[id]} onChange={handleChangeSelect}>
                            {Array.from({ length: optionLength }, (_, i) => {
                                const dateValue =
                                    id === 'year' ? standardDate - i : standardDate + i;
                                return (
                                    <option key={dateValue} value={dateValue}>
                                        {dateValue}
                                    </option>
                                );
                            })}
                        </BirthInputSelect>
                        <label htmlFor={id}>{label}</label>
                    </BirthInputWrapper>
                );
            })}
        </>
    );
};

export default BirthField;
