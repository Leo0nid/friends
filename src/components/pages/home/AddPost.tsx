import { FC, useState ,KeyboardEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TypeSetState } from '../../../types';
import { IPost } from '../../../types';
import { user } from '../../layout/sidebar/dataUsers';

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState('');
  const addPostHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    if(evt.key === 'Enter')
    {
    setPosts((prev) => [
      
      {
        author: user[0],
        content,
        createdAt: '5 минут назад',
      },
      ...prev,
    ]);
    setContent('')
  } 
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}>
      <TextField
        label="Расскажи,что у тебя нового?"
        variant="outlined"
        inputProps={{
          sx: { borderRadius: '25px', backgroundColor: 'F9F9F9', width: '100%' },
        }}
        sx={{
          width: '100%',
        }}
        onKeyPress={addPostHandler}
        onChange={(evt) => setContent(evt.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
