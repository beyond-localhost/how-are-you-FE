import { Birth, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React, { Fragment } from 'react';
import { BIRTH_INPUT } from '@/constants/form.ts';

interface BirthFormProp extends setCurInfoByKeyParam {
    birth: Birth;
}

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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const maxLength = e.target.maxLength;
        if (value.length > maxLength) {
            e.target.value = value.slice(0, maxLength);
        }
    };

    return (
        <>
            <p>생년월일</p>

            {BIRTH_INPUT.map((item, index) => {
                const { id, label } = item;
                return (
                    <Fragment key={id}>
                        <input
                            type="number"
                            id={id}
                            min={0}
                            maxLength={id === 'year' ? 4 : 2}
                            value={birthArr[index]}
                            onInput={handleInput}
                            onChange={e => handleChangeInput(e, index)}
                        />
                        <label htmlFor={id}>{label}</label>
                    </Fragment>
                );
            })}
        </>
    );
};

export default BirthForm;
