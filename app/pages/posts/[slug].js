import Layout from '../../components/Layout';
import { getPostBySlug, getAllPostSlugs } from '../../data/posts';

export default function Post({ post }) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs().map(slug => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
