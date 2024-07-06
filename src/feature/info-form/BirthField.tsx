import { Birth, openedOptionType, setCurInfoByKeyParam } from '@type/infoFormType.ts';
import React, { useState } from 'react';
import { BIRTH_INPUT, SELECT_TITLE_TEXT } from '@/constants/form.ts';
import { InputTitle } from '@feature/info-form/styles/InfoForm.style.tsx';
import {
    BirthInputBox,
    BirthInputLabel,
    BirthInputWrapper
} from '@feature/info-form/styles/Birth.style.tsx';
import BirthSelectBox from '@feature/info-form/components/BirthSelectBox.tsx';

interface BirthFieldProp extends setCurInfoByKeyParam {
    birth: Birth;
}

const BirthField: React.FC<BirthFieldProp> = ({ setCurInfoByKey, birth }) => {
    const [openedOption, setOpenedOption] = useState<openedOptionType>('');

    return (
        <>
            <InputTitle>{'생년월일' + SELECT_TITLE_TEXT}</InputTitle>

            <BirthInputWrapper>
                {BIRTH_INPUT.map(item => (
                    <BirthInputBox key={item.id}>
                        <BirthSelectBox
                            item={item}
                            setCurInfoByKey={setCurInfoByKey}
                            birth={birth}
                            openedOption={openedOption}
                            setOpenedOption={setOpenedOption}
                        />
                        <BirthInputLabel>{item.label}</BirthInputLabel>
                    </BirthInputBox>
                ))}
            </BirthInputWrapper>
        </>
    );
};

export default BirthField;
