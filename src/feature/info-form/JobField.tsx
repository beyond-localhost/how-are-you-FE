import React, { useEffect, useState } from 'react';
import { api } from '@lib/api/client.ts';
import { AUTH } from '@/constants/auth.ts';
import { Job, Jobs, setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface JobFormProp extends setCurInfoByKeyParam {
    job: Job;
}

const JobField: React.FC<JobFormProp> = ({ setCurInfoByKey, job }) => {
    const [jobList, setJobList] = useState<Jobs>([]);

    useEffect(() => {
        api.GET('/jobs', {
            params: {
                header: {
                    authorization: `Bearer ${sessionStorage.getItem(AUTH.ACCESS_TOKEN_KEY)}`
                }
            }
        }).then(res => {
            if (res.data) {
                setJobList(res.data);
            }
        });
    }, []);

    const handleClick = (id: number) => {
        setCurInfoByKey({ key: 'job', value: id });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>직업</p>

            {jobList.length > 0 &&
                jobList.map(item => {
                    const { id, name } = item;
                    return (
                        <button
                            key={id}
                            style={{ padding: '10px', color: job === id ? 'blue' : 'black' }}
                            onClick={() => handleClick(id)}
                        >
                            {name}
                        </button>
                    );
                })}
        </>
    );
};

export default JobField;
