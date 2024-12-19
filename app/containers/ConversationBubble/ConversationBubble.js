import React from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@/app/components/Box/Box';
import Typography from '@/app/components/Typography/Typography';
import { useTheme } from '@mui/material';
import IconButton from '@/app/components/IconButton/IconButton';
import Tooltip from '@/app/components/Tooltip/Tooltip';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ErrorIcon from '@mui/icons-material/Error';

const ConversationBubble = ({ entry }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '80%',
        alignSelf: entry.askedBy === 'user' ? 'flex-end' : 'flex-start',
        backgroundColor: entry.askedBy === 'user' ? theme.palette.primary.main : theme.palette.background.default,
        color: entry.askedBy === 'user' ? theme.palette.primary.contrastText : theme.palette.text.primary,
        borderRadius: entry.askedBy === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
        borderWidth: entry.askedBy === 'bot' ? 1 : 0,
        borderStyle: entry.askedBy === 'bot' ? 'solid' : 'none',
        borderColor: entry.askedBy === 'bot' ? theme.palette.primary.main : 'none',
        padding: 2,
        marginBottom: 1,
      }}
    >
      <ReactMarkdown
        children={entry.text}
        components={{
          p: ({ children }) => (
            <Typography>
              {children}
            </Typography>
          ),
          ul: ({ children }) => (
            <ul style={{ marginTop: 0, marginBottom: 0, paddingInlineStart: '1em' }}>
              {children}
            </ul>
          ),
        }}
      />
      {entry.askedBy === 'bot' && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
          <Tooltip title="Included Spoilers">
            <IconButton aria-label="Included Spoilers" color={'error'}>
              <ErrorIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Not Helpful">
            <IconButton aria-label="Not Helpful" color={'error'}>
              <ThumbDownIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Helpful">
            <IconButton aria-label="Helpful" color={'success'}>
              <ThumbUpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default ConversationBubble;
