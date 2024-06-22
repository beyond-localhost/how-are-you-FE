import styled from '@emotion/styled';

export const NickNameInput = styled.input(props => ({
    // todo: font 넣기

    display: 'flex',
    width: '406px',
    height: '48px',
    padding: '12px 16px',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '12px',
    border: '1px solid var(--Mauve-7, #d0cdd7)',
    background: props.value ? 'var(--Violet-1, #FDFCFE)' : 'var(--Mauve-2, #faf9fb)'
}));
