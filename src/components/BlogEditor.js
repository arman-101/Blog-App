import React, { useState } from 'react';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function BlogEditor({ blogId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    if (blogId) {
      const blogRef = doc(db, 'blogs', blogId);
      await updateDoc(blogRef, { title, content });
    } else {
      await addDoc(collection(db, 'blogs'), { title, content });
    }
    navigate('/feed');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{blogId ? 'Edit Blog' : 'New Blog'}</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Content"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary w-100" onClick={handleSave}>Save</button>
    </div>
  );
}

export default BlogEditor;
