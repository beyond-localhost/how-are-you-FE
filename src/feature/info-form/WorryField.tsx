import React from 'react';
import { setCurInfoByKeyParam, Worries, Worry } from '@type/infoFormType.ts';
import { SELECT_TITLE_TEXT } from '@/constants/form.ts';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';

interface WorryFormProp extends setCurInfoByKeyParam {
    worry: Worry;
    worryData: Worries;
}

const WorryField: React.FC<WorryFormProp> = ({ setCurInfoByKey, worry, worryData }) => {
    const handleWorryClick = (id: number) => {
        const newSet = new Set(worry);

        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }

        setCurInfoByKey({ key: 'worry', value: newSet });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <InputTitle>{'요즘 무슨 고민거리가 있으신가요?' + SELECT_TITLE_TEXT}</InputTitle>

            {worryData.length > 0 &&
                worryData.map(item => {
                    const { id, name } = item;
                    return (
                        <button
                            key={id}
                            style={{
                                padding: '10px',
                                color: worry.has(id) ? 'blue' : 'black'
                            }}
                            onClick={() => handleWorryClick(id)}
                            type="button"
                        >
                            {name}
                        </button>
                    );
                })}
        </>
    );
};

export default WorryField;
