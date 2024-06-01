import { setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React, { Fragment } from 'react';

interface BirthFormProp extends setCurInfoByKeyParam {
    birth: string;
}

const BIRTH_INPUT = [
    { id: 'year', label: '년' },
    { id: 'month', label: '월' },
    { id: 'day', label: '일' }
];

const BirthForm: React.FC<BirthFormProp> = ({ setCurInfoByKey, birth }) => {
    const birthArr = birth.split('-'); // ['1998', '5', '1']

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // todo: 날짜 max. 유효성 체크
        const value = e.target.value;

        const newBirthArr = [...birthArr];
        newBirthArr[index] = value.toString();
        const newBirth = newBirthArr.join('-');

        setCurInfoByKey({ key: 'birth', value: newBirth });
    };

    // todo: maxLength
    return (
        <>
            <p>생년월일</p>

            {BIRTH_INPUT.map((item, index) => (
                <Fragment key={item.id}>
                    <input
                        type="number"
                        id={item.id}
                        min={0}
                        maxLength={item.id === 'year' ? 4 : 2}
                        value={birthArr[index]}
                        onChange={e => handleChangeInput(e, index)}
                    />
                    <label htmlFor={item.id}>{item.label}</label>
                </Fragment>
            ))}
        </>
    );
};

export default BirthForm;
