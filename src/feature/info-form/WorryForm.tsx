import React, { useEffect, useState } from 'react';
import { api } from '@lib/api/client.ts';
import { AUTH } from '@/constants/auth.ts';
import { setCurInfoByKeyParam, Worries } from '@type/infoFormType.ts';

interface WorryFormProp extends setCurInfoByKeyParam {
    worry: number | null;
}

const WorryForm: React.FC<WorryFormProp> = ({ setCurInfoByKey, worry }) => {
    const [worryList, setWorryList] = useState<Worries>([]);

    useEffect(() => {
        api.GET('/jobs', {
            params: {
                header: {
                    authorization: `Bearer ${sessionStorage.getItem(AUTH.ACCESS_TOKEN_KEY)}`
                }
            }
        }).then(res => {
            if (res.data) {
                setWorryList(res.data);
            }
        });
    }, []);

    const handleClick = (id: number) => {
        setCurInfoByKey({ key: 'worry', value: id });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>고민</p>

            {worryList.length > 0 &&
                worryList.map(item => {
                    const id = item.id;
                    return (
                        <button
                            key={id}
                            style={{ padding: '10px', color: worry === id ? 'blue' : 'black' }}
                            onClick={() => handleClick(id)}
                        >
                            {item.name}
                        </button>
                    );
                })}
        </>
    );
};

export default WorryForm;
