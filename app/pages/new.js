import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { createNewPost } from '../data/posts';

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = await createNewPost({ title, content });
    router.push(`/posts/${slug}`);
  };

  return (
    <Layout>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </Layout>
  );
}
