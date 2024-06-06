import { Birth, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React, { Fragment } from 'react';
import { BIRTH_INPUT } from '@/constants/form.ts';

interface BirthFormProp extends setCurInfoByKeyParam {
    birth: Birth;
}

const BirthField: React.FC<BirthFormProp> = ({ setCurInfoByKey, birth }) => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBirthObj = { ...birth, [e.target.id]: e.target.value };

        setCurInfoByKey({ key: 'birth', value: newBirthObj });
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

            {BIRTH_INPUT.map(item => {
                const { id, label } = item;

                return (
                    <Fragment key={id}>
                        <input
                            type="number"
                            id={id}
                            min={0}
                            maxLength={id === 'year' ? 4 : 2}
                            value={birth[id] || ''}
                            onInput={handleInput}
                            onChange={handleChangeInput}
                        />
                        <label htmlFor={id}>{label}</label>
                    </Fragment>
                );
            })}
        </>
    );
};

export default BirthField;
