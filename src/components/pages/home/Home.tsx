import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import AddPost from './AddPost';
import Posts from './Posts'
import { IPost } from '../../../types';
import {InitialPosts} from './InitialPosts'

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>(InitialPosts);

  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts}/>
    </Box>
  );
};

export default Home;
