import React from 'react';
import { Job, Jobs, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';
import { SELECT_TITLE_TEXT } from '@/constants/form.ts';
import {
    SelectListItemButton,
    SelectListWrapper
} from '@feature/info-form/styles/SelectListField.style.tsx';

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
            <InputTitle>{'직업' + SELECT_TITLE_TEXT}</InputTitle>

            <SelectListWrapper>
                {jobData.length > 0 &&
                    jobData.map(item => {
                        const { id, name } = item;
                        const index = id - 1;
                        const isSelected = job === index;
                        return (
                            <SelectListItemButton
                                key={id}
                                onClick={() => handleJobClick(index)}
                                type="button"
                                isSelected={isSelected}
                            >
                                {name}
                            </SelectListItemButton>
                        );
                    })}
            </SelectListWrapper>
        </>
    );
};

export default JobField;
