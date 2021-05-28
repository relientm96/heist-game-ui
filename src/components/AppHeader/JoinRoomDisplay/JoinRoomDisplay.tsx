/* eslint-disable no-alert */
import { Stack, TextField, Button } from 'braid-design-system';
import React, { useState } from 'react';

interface JoinRoomDisplayProps {
  
}

export const JoinRoomDisplay = ({ }: JoinRoomDisplayProps) => {
  const [roomCodeField, setRoomCodeField] = useState<string>('');
  return (
    <Stack space="small">
      <TextField
        id="roomIdLol"
        label="Enter room code below"
        onChange={(event) => setRoomCodeField(event.currentTarget.value)}
        value={roomCodeField}
        onClear={() => setRoomCodeField('')}
      />
      <Button id="submitButton" onClick={ () => alert(`Joining room ${roomCodeField}`)}>
        Submit
      </Button>
    </Stack>
  );
};
