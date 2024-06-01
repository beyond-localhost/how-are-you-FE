import { PageLayout } from '@components/StyledComponents.ts';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NicknameForm from '@/feature/info-form/NicknameForm.tsx';
import { InfoParam } from '@type/infoFormType.ts';
import GenderForm from '@feature/info-form/GenderForm.tsx';
import BirthForm from '@feature/info-form/BirthForm.tsx';
import JobForm from '@feature/info-form/JobForm.tsx';
import WorryForm from '@feature/info-form/WorryForm.tsx';
// import { api } from '@lib/api/client.ts';
// import { AUTH } from '@/constants/auth.ts';

enum Step {
    Nickname,
    Jender,
    Birth,
    Job,
    Worry
}

type Info = {
    readonly nickname: string;
    readonly gender: string | null;
    readonly birth: string;
    readonly job: number | null;
    readonly worry: number | null;
};

export async function loader() {
    // const response = await api.GET('/recommendation_nickname', {
    //     params: {
    //         header: {
    //             authorization: `Bearer ${sessionStorage.getItem(AUTH.ACCESS_TOKEN_KEY)}`
    //         }
    //     }
    // });
    //
    // if (response.error) {
    //     alert('다시 시도해주세요'); // todo
    //     return null;
    // }
    //
    // const nickname = response && response.nickname;
    // return nickname;
    return '긍정적인토토로';
}

function InfoForm() {
    const recommendNickname = useLoaderData() as string;
    const [step, setStep] = useState<Step>(0);
    const [info, setInfo] = useState<Info>({
        nickname: '',
        gender: null,
        birth: '--',
        job: null,
        worry: null
    });

    const infoKeys = Object.keys(info);

    // region - step
    const handlePrevStep = () => {
        setStep(prevState => prevState - 1);
    };

    const handleNextStep = () => {
        setStep(prevState => prevState + 1);
    };

    // true면 disabled
    const checkNextDisabled = () => {
        const curKey = infoKeys[step];
        if (!isKeyOfInfo(curKey)) return true;

        const curValue = info[curKey];
        return step === Step.Worry || !curValue || ['', -1].includes(curValue);
    };
    // endregion - step

    // region - setting form
    const isKeyOfInfo = (value: string | undefined): value is keyof Info => {
        return typeof value === 'string' && infoKeys.includes(value);
    };

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
            case 0:
            default:
                return (
                    <NicknameForm
                        setCurInfoByKey={setCurInfoByKey}
                        recommendNickname={recommendNickname}
                        nickname={info.nickname}
                    />
                );
            case 1:
                return <GenderForm setCurInfoByKey={setCurInfoByKey} gender={info.gender} />;
            case 2:
                return <BirthForm setCurInfoByKey={setCurInfoByKey} birth={info.birth} />;
            case 3:
                return <JobForm setCurInfoByKey={setCurInfoByKey} job={info.job} />;
            case 4:
                return <WorryForm setCurInfoByKey={setCurInfoByKey} worry={info.worry} />;
        }
    };

    return (
        <PageLayout>
            <h1>기본 정보 입력</h1>

            <em>
                {step + 1}/{infoKeys.length} 단계
            </em>

            {renderStepForm()}

            <div>
                <button onClick={handlePrevStep} disabled={step === 0}>
                    ⬅️
                </button>
                <button onClick={handleNextStep} disabled={checkNextDisabled()}>
                    ➡️
                </button>
            </div>
        </PageLayout>
    );
}

export default InfoForm;
