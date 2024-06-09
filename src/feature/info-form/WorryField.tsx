import React, { useEffect, useState } from 'react';
import { api } from '@lib/api/client.ts';
import { setCurInfoByKeyParam, Worries, Worry } from '@type/infoFormType.ts';

interface WorryFormProp extends setCurInfoByKeyParam {
    worry: Worry;
}

const WorryField: React.FC<WorryFormProp> = ({ setCurInfoByKey, worry }) => {
    const [worryList, setWorryList] = useState<Worries>([]);

    useEffect(() => {
        api.GET('/worries').then(res => {
            setWorryList(res.data || []);
        });
    }, []);

    const handleWorryClick = (index: number) => {
        const targetIndex = worry.indexOf(index);
        let newWorryArr = [];

        if (targetIndex === -1) {
            newWorryArr = [...worry, index];
            setCurInfoByKey({ key: 'worry', value: newWorryArr });
        } else {
            newWorryArr = [...worry.slice(0, targetIndex), ...worry.slice(targetIndex + 1)];
            setCurInfoByKey({ key: 'worry', value: newWorryArr });
        }
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>고민</p>

            {worryList.length > 0 &&
                worryList.map(item => {
                    const { id, name } = item;
                    const index = id - 1;
                    return (
                        <button
                            key={id}
                            style={{
                                padding: '10px',
                                color: worry.includes(index) ? 'blue' : 'black'
                            }}
                            onClick={() => handleWorryClick(index)}
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
