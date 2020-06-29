import { comments } from './index';

// comments
function createNewComment(data) {
	return comments.post('/', data);
}
function fetchComments() {
	return comments.get('/');
}

function fetchCommentById(id) {
	return comments.get(id);
}

function editCommentById(id, data) {
	return comments.put(id, data);
}

function deleteCommentById(id) {
	return comments.delete(id);
}

export {
	createNewComment,
	fetchComments,
	fetchCommentById,
	editCommentById,
	deleteCommentById,
};
