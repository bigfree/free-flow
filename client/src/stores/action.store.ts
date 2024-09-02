import { ActionInfoFormValues } from '@common/form-context/action-info.context.ts';
import { create } from 'zustand';
import { ActionType } from '@/generated/freeFlow/graphql.ts';
import { produce } from 'immer';

type ActionProps = {
    data: ActionInfoFormValues;
};

type ActionActions = {
    setData: (data: ActionInfoFormValues) => void;
    resetData: () => void;
};

export type ActionStore = ActionProps & ActionActions;

const actionStoreInitialData: ActionInfoFormValues = {
    color: '#efefefef',
    type: ActionType.Square,
    width: 100,
    height: 50,
    name: '',
    class: '',
};
// TODO: asi zmazat?
const useActionStore = create<ActionStore>()((set, get) => ({
    data: actionStoreInitialData,
    setData: (data) => {
        set(
            produce((state: ActionStore) => {
                state.data = {
                    ...data,
                };
            }),
        );
    },
    resetData: () => {
        set(
            produce((state: ActionStore) => {
                state.data = {
                    ...actionStoreInitialData,
                };
            }),
        );
    },
}));

export default useActionStore;
