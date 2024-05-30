import { setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React from 'react';

interface BirthFormProp extends setCurInfoByKeyParam {
    year: string;
    month: string;
    day: string;
}

const BirthForm: React.FC<BirthFormProp> = ({ setCurInfoByKey, year, month, day }) => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // todo: 날짜 max 체크
        setCurInfoByKey({ key: e.target.id, value: e.target.value });
    };

    return (
        <>
            <p>생년월일</p>
            <div>
                <input type="number" id="year" min={0} value={year} onChange={handleChangeInput} />
                <label htmlFor="year">년</label>

                <input
                    type="number"
                    id="month"
                    min={0}
                    value={month}
                    onChange={handleChangeInput}
                />
                <label htmlFor="month">월</label>

                <input type="number" id="day" min={0} value={day} onChange={handleChangeInput} />
                <label htmlFor="day">일</label>
            </div>
        </>
    );
};

export default BirthForm;
