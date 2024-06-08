import { PageLayout } from '@components/StyledComponents.ts';
import { useState } from 'react';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import {
    Birth,
    Gender,
    InfoParam,
    Job,
    Nickname,
    NicknameData,
    Worry
} from '@type/infoFormType.ts';
import NicknameField from '@feature/info-form/NicknameField.tsx';
import GenderField from '@feature/info-form/GenderField.tsx';
import BirthField from '@feature/info-form/BirthField.tsx';
import JobField from '@feature/info-form/JobField.tsx';
import WorryField from '@feature/info-form/WorryField.tsx';
import { api } from '@lib/api/client.ts';

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
    const response = await api.GET('/recommendation_nickname');
    const responseData: NicknameData | undefined = response.data;

    if (!responseData) {
        throw new Response('nickname fetch error');
    }
    return responseData.nickname;
}

function InfoForm() {
    const navigate = useNavigate();
    const recommendNickname = useLoaderData() as string;

    const [step, setStep] = useState<Step>(Step.Nickname);
    const [info, setInfo] = useState<Info>({
        nickname: '',
        gender: -1,
        birth: {
            year: 2000,
            month: 1,
            day: 1
        },
        job: -1,
        worry: []
    });

    const infoKeys = Object.keys(info);

    // region - step
    const submitInfoForm = () => {
        // todo: post api
        navigate('/question-list');
    };

    const handleStepClick = (direction: Direction) => {
        if (step === Step.Worry) {
            submitInfoForm();
            return;
        }

        const nextStepValue = direction === DIRECTION.LEFT ? -1 : 1;
        setStep(prevState => prevState + nextStepValue);
    };

    // 우측 버튼
    const checkDisabled = (): boolean => {
        const { nickname, job, gender, worry } = info;

        return (
            (step === Step.Nickname && !nickname) ||
            (step === Step.Worry && worry.length === 0) ||
            (step === Step.Gender && gender === -1) ||
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
                        recommendNickname={recommendNickname}
                        nickname={info.nickname}
                    />
                );
            case Step.Gender:
                return <GenderField setCurInfoByKey={setCurInfoByKey} gender={info.gender} />;
            case Step.Birth:
                return <BirthField setCurInfoByKey={setCurInfoByKey} birth={info.birth} />;
            case Step.Job:
                return <JobField setCurInfoByKey={setCurInfoByKey} job={info.job} />;
            case Step.Worry:
                return <WorryField setCurInfoByKey={setCurInfoByKey} worry={info.worry} />;
            default: // todo: error boundary
                return <div>err!</div>;
        }
    };

    return (
        <PageLayout>
            <h1>기본 정보 입력</h1>

            <em>
                {step + 1}/{infoKeys.length} 단계
            </em>

            <Form>
                <fieldset>
                    <legend>기본 정보 입력</legend>
                    {renderStepForm()}
                </fieldset>

                <div>
                    <button
                        onClick={() => handleStepClick(DIRECTION.LEFT)}
                        disabled={step === Step.Nickname}
                    >
                        ⬅️
                    </button>
                    <button
                        onClick={() => handleStepClick(DIRECTION.RIGHT)}
                        disabled={checkDisabled()}
                    >
                        ➡️
                    </button>
                </div>
            </Form>
        </PageLayout>
    );
}

export default InfoForm;
