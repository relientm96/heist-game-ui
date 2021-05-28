/* eslint-disable no-console */
import {
  Box,
  ContentBlock,
  Stack,
  Heading,
  Inline,
  Button,
} from 'braid-design-system';
import React, { useState } from 'react';

import { JoinRoomDisplay } from '../components/JoinRoomDisplay/JoinRoomDisplay';

const url = 'http://localhost:42341';

interface GameRoomProps {
  pinCode: string;
}

const GameRoomComponent = ({ pinCode }: GameRoomProps) => (
  <Heading level="3" align="center">
    {' '}
    Your Room Code is {pinCode}
  </Heading>
);

export const Lobby = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [isJoinRoom, setIsJoinRoom] = useState<boolean>(false);
  const [isCreateRoom, setIsCreateRoom] = useState<boolean>(false);

  const createRoom = async () => {
    setIsCreateRoom(true);
    setIsJoinRoom(false);

    const parsedPinCode = await fetch(`${url}/game`, {
      method: 'POST',
      body: '',
    })
      .then((r) => r.json())
      .then((data) => data?.pinCode);
    setRoomCode(parsedPinCode);
  };

  const joinRoom = async () => {
    setIsCreateRoom(false);
    setIsJoinRoom(true);
  };

  return (
    <Box background="body" paddingX="small" paddingY={['xlarge', 'xxlarge']}>
      <ContentBlock>
        <Stack space="large" align="center">
          <Stack space="large">
            <Heading align="center" level="1">
              Adventure Game
            </Heading>
            <Inline align="center" space="small">
              <Button variant="solid" onClick={() => createRoom()}>
                Create Room
              </Button>
              <Button variant="solid" onClick={() => joinRoom()}>
                Join Room
              </Button>
            </Inline>

            {isJoinRoom ? <JoinRoomDisplay /> : null}
            {isCreateRoom ? <GameRoomComponent pinCode={roomCode} /> : null}
          </Stack>
        </Stack>
      </ContentBlock>
    </Box>
  );
};
