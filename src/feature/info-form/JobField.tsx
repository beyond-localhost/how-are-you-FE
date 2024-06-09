import React, { useEffect, useState } from 'react';
import { api } from '@lib/api/client.ts';
import { Job, Jobs, setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface JobFormProp extends setCurInfoByKeyParam {
    job: Job;
}

const JobField: React.FC<JobFormProp> = ({ setCurInfoByKey, job }) => {
    const [jobList, setJobList] = useState<Jobs>([]);

    useEffect(() => {
        api.GET('/jobs').then(res => {
            setJobList(res.data || []);
        });
    }, []);

    const handleJobClick = (index: number) => {
        setCurInfoByKey({ key: 'job', value: index });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>직업</p>

            {jobList.length > 0 &&
                jobList.map(item => {
                    const { id, name } = item;
                    const index = id - 1;
                    return (
                        <button
                            key={id}
                            style={{ padding: '10px', color: job === index ? 'blue' : 'black' }}
                            onClick={() => handleJobClick(index)}
                            type="button"
                        >
                            {name}
                        </button>
                    );
                })}
        </>
    );
};

export default JobField;
