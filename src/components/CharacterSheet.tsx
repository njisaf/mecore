import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Box
} from '@mui/material';
import { CharacterDataModel } from '../datamodels/character-data';
import '../styles/CharacterSheet.scss';

interface CharacterSheetProps {
  character: CharacterDataModel;
  onUpdate: (character: CharacterDataModel) => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({
  character,
  onUpdate
}) => {
  const handleAttributeChange = (attributeName: keyof typeof character.data.attributes, value: string) => {
    character.setAttribute(attributeName, parseInt(value) || 10);
    onUpdate(character);
  };

  return (
    <Paper sx={{ p: 2 }} className="character-sheet">
      <Grid container spacing={2}>
        <Grid item xs={12} className="character-sheet__section">
          <Typography variant="h5" className="character-sheet__section-title">
            Character Sheet
          </Typography>
        </Grid>

        {/* Attributes */}
        <Grid item xs={12} className="character-sheet__section">
          <Typography variant="h6" className="character-sheet__section-title">
            Attributes
          </Typography>
          <Box className="character-sheet__attributes">
            {Object.entries(character.data.attributes).map(([attr, value]) => (
              <div key={attr} className="character-sheet__attributes-item">
                <TextField
                  label={attr.charAt(0).toUpperCase() + attr.slice(1)}
                  type="number"
                  value={value}
                  onChange={(e) => handleAttributeChange(attr as keyof typeof character.data.attributes, e.target.value)}
                  inputProps={{ min: 1, max: 20 }}
                  fullWidth
                />
              </div>
            ))}
          </Box>
        </Grid>

        {/* Health */}
        <Grid item xs={12} className="character-sheet__section">
          <Typography variant="h6" className="character-sheet__section-title">
            Health
          </Typography>
          <div className="character-sheet__health">
            <TextField
              label="Current"
              type="number"
              value={character.data.health.value}
              onChange={(e) => {
                character.setHealth(parseInt(e.target.value) || 0);
                onUpdate(character);
              }}
            />
            <div className="character-sheet__health-bar">
              <div
                className="character-sheet__health-bar-fill"
                style={{
                  width: `${(character.data.health.value / character.data.health.max) * 100}%`
                }}
              />
            </div>
            <TextField
              label="Maximum"
              type="number"
              value={character.data.health.max}
              onChange={(e) => {
                character.setMaxHealth(parseInt(e.target.value) || 0);
                onUpdate(character);
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
