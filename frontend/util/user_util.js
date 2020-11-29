export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    })
);

export const addImageToUser = (userId, formData) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
);