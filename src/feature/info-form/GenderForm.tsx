import { GENDER } from '@/constants/form.ts';
import React from 'react';
import { setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface GenderFormProp extends setCurInfoByKeyParam {
    gender: string | null;
}

const GenderForm: React.FC<GenderFormProp> = ({ setCurInfoByKey, gender }) => {
    const handleGenderCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurInfoByKey({ key: 'gender', value: e.target.id });
    };

    return (
        <>
            <p>성별</p>
            <div onChange={handleGenderCheck}>
                {Object.entries(GENDER).map(([_, item]) => (
                    <div key={item.id}>
                        <input type="radio" id={item.id} checked={gender === item.id} readOnly />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GenderForm;
