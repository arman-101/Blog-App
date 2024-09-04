import React, { useState } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

function PostForm({ post, onClose }) {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post) {
      // Update existing post
      const postDoc = doc(db, 'posts', post.id);
      await updateDoc(postDoc, { title, content });
    } else {
      // Create new post
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, { title, content });
    }
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{post ? 'Edit Post' : 'New Post'}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  rows="3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
