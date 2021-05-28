/* eslint-disable no-console */
import {
  Box,
  ContentBlock,
  Stack,
  Heading,
  Inline,
  Button,
} from 'braid-design-system';
import React from 'react';

const createRoom = async () => {
  const url = `http://localhost:42341/game`;
  const response = await fetch(url, {
    method: 'POST',
    body: '',
  }).catch((err)=>{
    console.log(err);
  });
  console.log(response);
};

export const AppHeader = () => (
  <Box background="body" paddingX="small" paddingY={['xlarge', 'xxlarge']}>
    <ContentBlock>
      <Stack space="large">
        <Stack space="large">
          <Heading align="center" level="1">
            Adventure Game
          </Heading>
          <Inline align="center" space="small">
            <Button variant="solid" onClick={() => createRoom()}>
              Create Room
            </Button>
            <Button variant="solid">Join Room</Button>
          </Inline>
        </Stack>
      </Stack>
    </ContentBlock>
  </Box>
);
