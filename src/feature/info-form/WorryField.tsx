import React from 'react';
import { setCurInfoByKeyParam, Worries, Worry } from '@type/infoFormType.ts';

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
            <p>고민</p>

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
