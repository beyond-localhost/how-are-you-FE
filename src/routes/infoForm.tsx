import { PageLayout } from '@components/StyledComponents.ts';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import NicknameForm from '@/feature/info-form/NicknameForm.tsx';
import {
    Birth,
    Gender,
    InfoParam,
    Job,
    Nickname,
    NicknameData,
    Worry
} from '@type/infoFormType.ts';
import GenderForm from '@feature/info-form/GenderForm.tsx';
import BirthForm from '@feature/info-form/BirthForm.tsx';
import JobForm from '@feature/info-form/JobForm.tsx';
import WorryForm from '@feature/info-form/WorryForm.tsx';
import { api } from '@lib/api/client.ts';
import { AUTH } from '@/constants/auth.ts';

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

type Direction = 'left' | 'right'; // 화살표 버튼

const DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right'
} as const;

export async function loader() {
    const response = await api.GET('/recommendation_nickname', {
        params: {
            header: {
                authorization: `Bearer ${sessionStorage.getItem(AUTH.ACCESS_TOKEN_KEY)}`
            }
        }
    });

    const responseData: NicknameData | undefined = response.data;

    return responseData ? responseData.nickname : '긍정적인 토토로'; // todo - sm: undefined 처리?
}

function InfoForm() {
    const navigate = useNavigate();
    const recommendNickname = useLoaderData() as string;

    const [step, setStep] = useState<Step>(0);
    const [info, setInfo] = useState<Info>({
        nickname: '',
        gender: null,
        birth: {
            year: null,
            month: null,
            day: null
        },
        job: null,
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

    const getCurKeyAndValue = () => {
        const curKey = infoKeys[step];
        if (!isKeyOfInfo(curKey)) return {};

        const curValue = info[curKey];
        return { curKey, curValue };
    };

    const checkDisabled = (direction: Direction): boolean => {
        const { curKey, curValue } = getCurKeyAndValue();
        if (!curKey) return true;

        // 좌측 버튼
        if (direction === DIRECTION.LEFT && step === Step.Nickname) {
            return true;
        }

        // 우측 버튼
        if (direction === DIRECTION.RIGHT) {
            if (!curValue) {
                return true; // 값이 없을 때
            } else if (step === Step.Birth && (!isBirthValid() || Number(info.birth.year) < 1920)) {
                return true; // 유효하지 않은 생년월일
            } else if (step === Step.Worry && info.worry.length === 0) {
                return true; // 고민 선택x
            }
        }

        return false;
    };

    // 생년월일 유효성
    const isBirthValid = () => {
        const { year, month, day } = info.birth;
        const curDate = new Date(`${year}-${month}-${day}`);

        return (
            curDate.getFullYear() === Number(year) &&
            curDate.getMonth() === Number(month) - 1 &&
            curDate.getDate() === Number(day)
        );
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
                <button
                    onClick={() => handleStepClick(DIRECTION.LEFT)}
                    disabled={checkDisabled(DIRECTION.LEFT)}
                >
                    ⬅️
                </button>
                <button
                    onClick={() => handleStepClick(DIRECTION.RIGHT)}
                    disabled={checkDisabled(DIRECTION.RIGHT)}
                >
                    ➡️
                </button>
            </div>
        </PageLayout>
    );
}

export default InfoForm;
