import { FC } from 'react';
import { IPost } from '../../../types';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { ImageList, ImageListItem } from '@mui/material';

interface IPosts {
  posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Box
          key={post.author.id}
          sx={{
            padding: 2,
            backgroundColor: '#F1F7FA',
            marginTop: '4'
          }}>
          <Link
            to={`/profile/${post.author.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#111',
              marginBottom: 5,
            }}>
            <Box
              sx={{
                position: 'relative',
                marginRight: 2,
                overflow: 'hidden',
                width: 56,
                height: 56,
              }}>
              <Avatar
                src={post.author.avatar}
                alt="avatar"
                sx={{ width: 50, height: 50, borderRadius: '50%' }}
              />
              {post.author.isInNetwork && (
                <Box
                  sx={{
                    backgroundColor: '#4FB14F',
                    border: '2px solid #F1F7FA',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    top: 37,
                    left: 39,
                    borderRadius: '50%',
                  }}
                />
              )}
            </Box>
            <div>
              <div style={{ fontSize: 14 }}>{post.author.name}</div>
              <div style={{ fontSize: 14, opacity: '0.6' }}>{post.createdAt}</div>
            </div>
          </Link>

          <p>{post.content}</p>
          {post?.images?.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt={''} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      ))}
    </>
  );
};

export default Posts;
