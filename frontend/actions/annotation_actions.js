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

export const fetchAnnotation = (annotationId) => dispatch => (
    APIUtil.fetchAnnotation(annotationId)
    .then( (annotation) => dispatch(receiveAnnotation(annotation)))
);

export const deleteAnnotation = (annotationId) => dispatch => (
    APIUtil.deleteAnnotation(annotationId)
        .then(() => dispatch(removeAnnotation(annotation)))
);

export const updateAnnotation = (annotation) => dispatch => (
    APIUtil.updateAnnotation(annotation)
        .then((annotation) => dispatch(receiveAnnotation(annotation)))
);

export const createAnnotation = (annotation) => dispatch => {
    return APIUtil.createAnnotation(annotation)
    .then((annotation) => dispatch(receiveAnnotation(annotation)));
};