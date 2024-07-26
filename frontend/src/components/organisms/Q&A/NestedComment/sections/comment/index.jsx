/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import Replies from './replies';
import { getCommentByQid, replyToComment } from './comment.service';
import { setComment, setNewCommentText, resetCommentData } from './slice/commentsSlice';
import styles from '../../NestedComment.module.scss';

const CommentContainer = () => {
  const { qId } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector(state => state.QuesnAndAnswerReducer.NestedCommentReducer.CommentReducer.comment);
  const newCommentText = useSelector(state => state.QuesnAndAnswerReducer.NestedCommentReducer.CommentReducer.newCommentText);
  // const { userFullName = '' } = useSelector(state => state.userSlice);

  useEffect(() => {
    fetchComment();
    return () => {
      dispatch(resetCommentData());
    };
  }, []);

  const fetchComment = () => {
    getCommentByQid({ qId })
      .then(({ data: allComments }) => {
        dispatch(setComment(allComments));
        dispatch(setNewCommentText(''));
      })
      .catch((err) => {
        message.error(err);
      });
  };

  const onAddNewComment = async () => {
    const payload = {
      questionId: qId,
      parentId: comment?._id,
      text: newCommentText,
      parentLvlCmt: true,
      userName: /* userFullName, */ 'userFullName', // TODO
      answeredDate: new Date().valueOf(),
    };
    await replyToComment(payload)
      .then((response) => {
        dispatch(setComment(response.data));
      })
      .catch((error) => {
        const errorMessage = error.message || 'An error occurred';
        message.error(errorMessage);
      });
  };

  const onAddNewCommmentHandler = async () => {
    await onAddNewComment();
    fetchComment();
  };

  return (
    <>
      {/* Post Parent Level Comment */}
      <div className={styles.totalAnswersSection}>
        <div className={styles.totalAnswers__count}>
          {(comment?.replies || []).length} answers
        </div>
        <input
          type="text"
          className={styles.answerText}
          placeholder="Add a comment ..."
          value={newCommentText}
          onChange={e => dispatch(setNewCommentText(e.target.value))}
        />
        <button
          type="button"
          className={styles.answerButton}
          onClick={onAddNewCommmentHandler}
          style={{ display: newCommentText !== '' ? 'block' : 'none' }}
        >
          Comment
        </button>
      </div>
      {/* Comment Section */}
      <div className={styles.commentsSection}>
        <Replies
          comment={comment}
          fetchComment={fetchComment}
        />
      </div>
    </>
  );
};

export default CommentContainer;
