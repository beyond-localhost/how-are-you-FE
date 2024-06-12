import React from 'react';
import { Job, Jobs, setCurInfoByKeyParam } from '@type/infoFormType.ts';

interface JobFormProp extends setCurInfoByKeyParam {
    job: Job;
    jobData: Jobs;
}

const JobField: React.FC<JobFormProp> = ({ setCurInfoByKey, job, jobData }) => {
    const handleJobClick = (index: number) => {
        setCurInfoByKey({ key: 'job', value: index });
    };

    // todo: api 가져올동안 loading spinner
    return (
        <>
            <p>직업</p>

            {jobData.length > 0 &&
                jobData.map(item => {
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
