import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
    Birth,
    Gender,
    InfoParam,
    Job,
    Jobs,
    Nickname,
    RecommendNickname,
    Worries,
    Worry
} from '@type/infoFormType.ts';
import NicknameField from '@feature/info-form/NicknameField.tsx';
import GenderField from '@feature/info-form/GenderField.tsx';
import BirthField from '@feature/info-form/BirthField.tsx';
import JobField from '@feature/info-form/JobField.tsx';
import WorryField from '@feature/info-form/WorryField.tsx';
import { api } from '@lib/api/client.ts';
import {
    FormFooter,
    FormButton,
    InfoFormFieldSet,
    FormStepContainer,
    InfoFormContainer
} from '@feature/info-form/styles/InfoForm.style.tsx';
import { Text } from '@components/text/Text.tsx';
import { mauve, violet } from '@/tokens/color.ts';

// 입력폼 단계
enum Step {
    Nickname,
    Gender,
    Birth,
    Job,
    Worry
}

type Info = {
    readonly nickname: Nickname;
    readonly gender: Gender;
    readonly birth: Birth;
    readonly job: Job;
    readonly worry: Worry;
};

const DIRECTION = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
} as const;
type Direction = keyof typeof DIRECTION;

export async function loader() {
    const [nicknameResponse, jobResponse, worryResponse] = await Promise.all([
        api.GET('/recommendation_nickname'),
        api.GET('/jobs'),
        api.GET('/worries')
    ]);

    if (nicknameResponse.error || jobResponse.error || worryResponse.error) {
        throw new Response('nickname fetch error');
    }

    const recommendNicknameData = nicknameResponse.data.nickname;
    const jobData = jobResponse.data;
    const worryData = worryResponse.data;

    return { recommendNicknameData, jobData, worryData };
}

function InfoForm() {
    const navigate = useNavigate();
    const { recommendNicknameData, jobData, worryData } = useLoaderData() as {
        recommendNicknameData: RecommendNickname;
        jobData: Jobs;
        worryData: Worries;
    };

    const [step, setStep] = useState<Step>(Step.Nickname);
    const [info, setInfo] = useState<Info>({
        nickname: '',
        gender: 'male',
        birth: {
            year: 2000,
            month: 1,
            day: 1
        },
        job: -1,
        worry: new Set()
    });

    const infoKeys = Object.keys(info);
    const isLastStep = step === Step.Worry;

    // region - step
    const submitInfoForm = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const { nickname, job, gender, worry, birth } = info;
            const response = await api.POST('/users/me/profile', {
                body: {
                    nickname,
                    birthday: birth,
                    jobId: job,
                    gender,
                    worryIds: Array.from(worry)
                }
            });

            if (response.error) {
                alert('오류가 발생했습니다. 다시 시도해주세요.');
            }

            navigate('/question-list');
        } catch (e) {
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const handleStepClick = (direction: Direction) => {
        if (isLastStep) {
            return;
        }

        const nextStepValue = direction === DIRECTION.LEFT ? -1 : 1;
        setStep(prevState => prevState + nextStepValue);
    };

    // 우측 버튼
    const checkDisabled = (): boolean => {
        const { nickname, job, worry } = info;

        return (
            (step === Step.Nickname && !nickname) ||
            (step === Step.Worry && worry.size === 0) ||
            (step === Step.Job && job === -1)
        );
    };
    // endregion - step

    // region - setting form

    const setCurInfoByKey = ({ key, value }: InfoParam) => {
        const newObj = {
            ...info,
            [key]: value
        };
        setInfo(newObj);
    };

    // endregion - setting form

    const renderStepForm = () => {
        switch (step) {
            case Step.Nickname:
                return (
                    <NicknameField
                        setCurInfoByKey={setCurInfoByKey}
                        recommendNicknameData={recommendNicknameData}
                        nickname={info.nickname}
                    />
                );
            case Step.Gender:
                return <GenderField setCurInfoByKey={setCurInfoByKey} gender={info.gender} />;
            case Step.Birth:
                return <BirthField setCurInfoByKey={setCurInfoByKey} birth={info.birth} />;
            case Step.Job:
                return (
                    <JobField setCurInfoByKey={setCurInfoByKey} job={info.job} jobData={jobData} />
                );
            case Step.Worry:
                return (
                    <WorryField
                        setCurInfoByKey={setCurInfoByKey}
                        worry={info.worry}
                        worryData={worryData}
                    />
                );
            default: // todo: error boundary
                return <div>err!</div>;
        }
    };

    return (
        <InfoFormContainer onSubmit={submitInfoForm}>
            <FormStepContainer>
                <Text size={5} weight={'bold'} color={mauve['11']}>
                    {step + 1}/
                </Text>
                <Text size={5} weight={'bold'} color={violet['12']}>
                    {infoKeys.length}
                </Text>
            </FormStepContainer>
            <InfoFormFieldSet>{renderStepForm()}</InfoFormFieldSet>

            <FormFooter>
                <FormButton
                    onClick={() => handleStepClick(DIRECTION.LEFT)}
                    disabled={step === Step.Nickname}
                    type="button"
                >
                    <Text size={6} weight={'bold'} color={mauve['1']}>
                        이전
                    </Text>
                </FormButton>
                <FormButton
                    onClick={() => handleStepClick(DIRECTION.RIGHT)}
                    disabled={checkDisabled()}
                    type={isLastStep ? 'submit' : 'button'}
                >
                    <Text size={6} weight={'bold'} color={mauve['1']}>
                        다음
                    </Text>
                </FormButton>
            </FormFooter>
        </InfoFormContainer>
    );
}

export default InfoForm;
