import { PREPEND_TODO, APPEND_TODO, DELETE_TODO, COMPLETE_TODO  } from './alert.types';


export const prependAlert = () => {
    return {
        type: PREPEND_TODO,
    };
};

export const appendAlert = () => {
    return {
        type: APPEND_TODO,
    };
};

export const deleteAlert = () => {
    return {
        type: DELETE_TODO,
    };
};

export const completeAlert = () => {
    return {
        type: COMPLETE_TODO,
    };
};