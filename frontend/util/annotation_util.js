export const createAnnotation = (annotation) => {
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
    return $.ajax({
        method: 'PATCH',
        url: `api/annotations/${annotation.id}`,
        data: { annotation }
    });
};

export const deleteAnnotation = (annotationId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/annotations/${annotationId}`
    })
);