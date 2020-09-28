import * as APIUtil from '../util/annotation_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const DELETE_ANNOTATION = 'DELETE_ANNOTATION';

const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation
});

const removeAnnotation = annotationId => ({
    type: DELETE_ANNOTATION,
    annotationId
});

export const fetchAnnotation = (annotationId, songId) => dispatch => (
    APIUtil.fetchAnnotation(annotationId, songId)
    .then( (annotation) => dispatch(receiveAnnotation(annotation)))
);

export const deleteAnnotation = (annotationId, songId) => dispatch => (
    APIUtil.deleteAnnotation(annotationId, songId)
        .then(() => dispatch(removeAnnotation(annotation)))
);

export const updateAnnotation = (annotation) => dispatch => (
    APIUtil.updateAnnotation(annotation)
        .then((annotation) => dispatch(receiveAnnotation(annotation)))
);
