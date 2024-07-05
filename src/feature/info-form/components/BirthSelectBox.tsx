import {
    BirthInputOption,
    BirthInputOptions,
    BirthInputOptionValue,
    BirthInputSelect
} from '@feature/info-form/styles/Birth.style.tsx';
import { Birth, BirthIdType, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import { useState } from 'react';
import { BirthInput } from '@/constants/form.ts';

interface BirthSelectBoxProp extends setCurInfoByKeyParam {
    birth: Birth;
    item: BirthInput;
}

type selectType = {
    id: BirthIdType;
    dateValue: number;
};

function BirthSelectBox({ setCurInfoByKey, item, birth }: BirthSelectBoxProp) {
    const [isOptionOpen, setIsOptionOpen] = useState(false);

    const handleChangeSelect = ({ id, dateValue }: selectType) => {
        const newBirthObj = { ...birth, [id]: dateValue };

        setCurInfoByKey({ key: 'birth', value: newBirthObj });
    };

    const getTargetDateInfo = (type: BirthIdType) => {
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

    const { id } = item;
    const { optionLength, standardDate } = getTargetDateInfo(id);

    return (
        <BirthInputSelect id={id} onClick={() => setIsOptionOpen(prev => !prev)}>
            <BirthInputOptionValue>{birth[id]}</BirthInputOptionValue>
            {isOptionOpen && (
                <BirthInputOptions>
                    {Array.from({ length: optionLength }, (_, i) => {
                        const dateValue = id === 'year' ? standardDate - i : standardDate + i;
                        return (
                            <BirthInputOption
                                key={dateValue}
                                value={dateValue}
                                onClick={() =>
                                    handleChangeSelect({
                                        id,
                                        dateValue
                                    })
                                }
                            >
                                {dateValue}
                            </BirthInputOption>
                        );
                    })}
                </BirthInputOptions>
            )}
        </BirthInputSelect>
    );
}

export default BirthSelectBox;
