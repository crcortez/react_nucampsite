// use slice files to organize logic dealing with different sections w/ applications state.

import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId)
    );
};