import { Box, Divider } from "@mui/material";
import BottonNav from "../components/BottomNav";
import NavHeader from "../components/NavHeader";
import Posts from "../components/Posts";
import { useEffect, useState } from "react";
import getPosts from "../services/Posts/GetPosts";

interface Post {
  id: string;
  userId: string;
  postUrl: string;
  description: string;
  author: string;
  authorUrl: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <Box sx={{ height: "100%" }}>
      <NavHeader />
      <Box sx={{my: 10}}>
        {posts.map((post, index) => (
          <Box key={post.id} sx={{ mb: 2 }}>
            <Posts 
              postUrl={post.postUrl}
              description={post.description}
              author={post.author}
              authorUrl={post.authorUrl}
            />
            {index < posts.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Box>
      <BottonNav />
    </Box>
  );
}
