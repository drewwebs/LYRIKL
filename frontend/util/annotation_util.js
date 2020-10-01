export const createAnnotation = (annotation) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/annotations`,
        data: { annotation }
    });
};

export const fetchAnnotation = (annotationId, songId) => (
    $.ajax({
        method: 'GET',
        url: `api/annotations/${annotationId}`
    })
);

export const updateAnnotation = (annotation) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/annotations/${annotation.id}`,
        data: { annotation }
    });
};

export const deleteAnnotation = (annotationId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/annotations/${annotationId}`
    })
);