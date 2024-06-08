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
            if (res.data) {
                setWorryList(res.data.worries);
            }
        });
    }, []);

    const handleClick = (index: number) => {
        const newWorryArr = [...worry, index];
        setCurInfoByKey({ key: 'worry', value: newWorryArr });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>고민</p>

            {worryList.length > 0 &&
                worryList.map((item, index) => {
                    const { id, name } = item;
                    return (
                        <button
                            key={id}
                            style={{
                                padding: '10px',
                                color: worry.includes(index) ? 'blue' : 'black'
                            }}
                            onClick={() => handleClick(index)}
                        >
                            {name}
                        </button>
                    );
                })}
        </>
    );
};

export default WorryField;
