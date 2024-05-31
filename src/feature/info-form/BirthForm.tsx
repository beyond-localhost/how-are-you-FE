import { setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React from 'react';

interface BirthFormProp extends setCurInfoByKeyParam {
    birth: string;
}

type obj = {};

const BirthForm: React.FC<BirthFormProp> = ({ setCurInfoByKey, birth }) => {
    const birthArr = birth.split('-');

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // todo: 날짜 max 체크
        const order = e.target.name;
        const value = e.target.value.toString();

        const newBirth = [...birthArr];
        if (!order) {
            return;
        }
        newBirth[order] = value;
        const newValue = newBirth.join('-');

        setCurInfoByKey({ key: 'birth', value: newValue });
    };

    return (
        <>
            <p>생년월일</p>
            <div>
                <input
                    type="number"
                    id="year"
                    min={0}
                    value={birthArr[0]}
                    name="0"
                    onChange={handleChangeInput}
                />
                <label htmlFor="year">년</label>

                <input
                    type="number"
                    id="month"
                    min={0}
                    value={birthArr[1]}
                    name="1"
                    onChange={handleChangeInput}
                />
                <label htmlFor="month">월</label>

                <input
                    type="number"
                    id="day"
                    min={0}
                    value={birthArr[2]}
                    name="2"
                    onChange={handleChangeInput}
                />
                <label htmlFor="day">일</label>
            </div>
        </>
    );
};

export default BirthForm;
