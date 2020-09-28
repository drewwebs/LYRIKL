export const createAnnotation = (annotation) => (
    $.ajax({
        method: 'POST',
        url: `api/${annotation.song_id}/annotations`,
        data: annotation
    })
);

export const fetchAnnotation = (annotationId, songId) => (
    $.ajax({
        method: 'GET',
        url: `api/${songId}/annotations/${annotationId}`
    })
);

export const updateAnnotation = (annotation) => (
    $.ajax({
        method: 'PATCH',
        url: `api/${annotation.song_id}/annotations/${annotation.id}`,
        data: annotation
    })
);

export const deleteAnnotation = (annotationId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/${songId}/annotations/${annotationId}`
    })
);