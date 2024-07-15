import { create } from 'zustand';

interface commonState {
    showHeaderDrawer: boolean;
    userNickname: string;
    toggleHeaderDrawer: () => void;
    setUserNickname: (nickname: string) => void;
}

export const useCommonStore = create<commonState>(set => ({
    showHeaderDrawer: false,
    userNickname: '',
    toggleHeaderDrawer: () =>
        set(state => ({
            showHeaderDrawer: !state.showHeaderDrawer
        })),
    setUserNickname: nickname => set({ userNickname: nickname })
}));
