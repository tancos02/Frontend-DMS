export const uploadFile = (file) => {
    return {
        type: "FILE_UPLOAD",
        payload: file
    };
};

export const renameFile = (file) => {
    return {
        type: "FILE_RENAME",
        payload: file
    };
};

export const tagFile = (file) => {
    return {
        type: "FILE_TAG",
        payload: file
    };
};

export const deleteFile = (file) => {
    return {
        type: "FILE_DELETE",
        payload: file
    };
};