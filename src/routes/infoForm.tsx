import { PageLayout } from '@components/StyledComponents.ts';
import { useState } from 'react';

type Info = {
    readonly nickname: string;
    readonly gender: number;
    readonly birth: string;
    readonly job: number;
    readonly worry: number;
};

function InfoForm() {
    const [step, setStep] = useState(0);
    const [info, setInfo] = useState<Info>({
        nickname: '',
        gender: 0,
        birth: '',
        job: 0,
        worry: 0
    });
    const keys = Object.keys(info);

    const isKeyofInfoType = (value: string | undefined): value is keyof Info => {
        return typeof value === 'string' && keys.includes(value);
    };

    const setCurInfo = () => {
        const key = keys[step]; // 변경 대상
        // todo 위에있는 key는 keyof Info로 좁혀져야함 !!!!!!!

        if (!isKeyofInfoType(key)) {
            return;
        }

        const newObj = {
            ...info,
            [key]: 1
        } satisfies Info; // todo
        setInfo(newObj);
    };

    const handlePrevStep = () => {
        setCurInfo();
        setStep(prevState => prevState - 1);
    };

    const handleNextStep = () => {
        setCurInfo();
        setStep(prevState => prevState + 1);
    };

    const renderStepForm = () => {
        // const key = keys[step]; // 변경 대상

        switch (step) {
            case 0:
            default:
                return (
                    <>
                        <label htmlFor="nickname">닉네임</label>
                        <input id="nickname" autoFocus defaultValue={info.nickname} />
                    </>
                );
            case 1:
                return (
                    <>
                        <p>성별</p>
                        <div>
                            <label htmlFor="man">남자</label>
                            <input type="radio" id="man" />

                            <label htmlFor="woman">여자</label>
                            <input type="radio" id="woman" />

                            <label htmlFor="nothing">선택안함</label>
                            <input type="radio" id="nothing" />
                        </div>
                    </>
                );
        }
    };

    return (
        <PageLayout>
            <h1>기본 정보 입력</h1>

            <em>{step}단계</em>

            {renderStepForm()}

            <div>
                <button onClick={handlePrevStep} disabled={step === 0}>
                    ⬅️
                </button>
                <button onClick={handleNextStep}>➡️</button>
            </div>
        </PageLayout>
    );
}

export default InfoForm;
