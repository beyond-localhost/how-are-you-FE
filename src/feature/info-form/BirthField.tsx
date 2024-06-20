import { Birth, BirthKey, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React, { Fragment } from 'react';
import { BIRTH_INPUT } from '@/constants/form.ts';

interface BirthFieldProp extends setCurInfoByKeyParam {
    birth: Birth;
}

const BirthField: React.FC<BirthFieldProp> = ({ setCurInfoByKey, birth }) => {
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newBirthObj = { ...birth, [e.target.id]: Number(e.target.value) };

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
            <p>생년월일</p>

            {BIRTH_INPUT.map(item => {
                const { id, label } = item;
                const { optionLength, standardDate } = getTargetDateInfo(id);

                return (
                    <Fragment key={id}>
                        <select id={id} value={birth[id]} onChange={handleChangeSelect}>
                            {Array.from({ length: optionLength }, (_, i) => {
                                const dateValue =
                                    id === 'year' ? standardDate - i : standardDate + i;
                                return (
                                    <option key={dateValue} value={dateValue}>
                                        {dateValue}
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor={id}>{label}</label>
                    </Fragment>
                );
            })}
        </>
    );
};

export default BirthField;
