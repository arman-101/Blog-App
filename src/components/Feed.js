import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import PostForm from './PostForm';
import LogoutButton from './LogoutButton';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  const handleAddPost = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingPost(null);
  };

  const handleDeletePost = async (postId) => {
    const postDoc = doc(db, 'posts', postId);
    await deleteDoc(postDoc);
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Feed</h2>
      <button className="btn btn-primary mb-3" onClick={handleAddPost}>New Post</button>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.content}</p>
            <button className="btn btn-secondary me-2" onClick={() => handleEditPost(post)}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {showForm && <PostForm post={editingPost} onClose={handleCloseForm} />}
      <LogoutButton />
    </div>
  );
}

export default Feed;
