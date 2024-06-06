import { GENDER } from '@/constants/form.ts';
import React from 'react';
import { Gender, setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface GenderFormProp extends setCurInfoByKeyParam {
    gender: Gender;
}

const GenderField: React.FC<GenderFormProp> = ({ setCurInfoByKey, gender }) => {
    const handleGenderCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurInfoByKey({ key: 'gender', value: e.target.id });
    };

    return (
        <>
            <p>성별</p>

            <div onChange={handleGenderCheck}>
                {GENDER.map(item => {
                    const { id, label } = item;
                    return (
                        <div key={id}>
                            <input type="radio" id={id} checked={gender === id} readOnly />
                            <label htmlFor={id}>{label}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default GenderField;
