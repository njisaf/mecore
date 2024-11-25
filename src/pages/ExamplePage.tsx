import React, { useState } from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { CharacterSheet } from '../components/CharacterSheet';
import { CharacterDataModel } from '../datamodels/character-data';
import theme from '../styles/theme';

export const ExamplePage: React.FC = () => {
  const [character, setCharacter] = useState(() => new CharacterDataModel());

  const handleCharacterUpdate = (updatedCharacter: CharacterDataModel) => {
    setCharacter(new CharacterDataModel(updatedCharacter.data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <CharacterSheet
          character={character}
          onUpdate={handleCharacterUpdate}
        />
      </Container>
    </ThemeProvider>
  );
};
