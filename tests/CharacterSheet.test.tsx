import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterSheet } from '../src/components/CharacterSheet';
import { CharacterDataModel } from '../src/datamodels/character-data';

describe('CharacterSheet', () => {
  let character: CharacterDataModel;
  let onUpdate: jest.Mock;

  beforeEach(() => {
    character = new CharacterDataModel();
    onUpdate = jest.fn();
  });

  it('renders character attributes', () => {
    render(<CharacterSheet character={character} onUpdate={onUpdate} />);

    const strengthInput = screen.getByLabelText('Strength') as HTMLInputElement;
    const dexterityInput = screen.getByLabelText('Dexterity') as HTMLInputElement;
    const constitutionInput = screen.getByLabelText('Constitution') as HTMLInputElement;

    expect(strengthInput.value).toBe('10');
    expect(dexterityInput.value).toBe('10');
    expect(constitutionInput.value).toBe('10');
  });

  it('updates attribute when changed', () => {
    render(<CharacterSheet character={character} onUpdate={onUpdate} />);

    const strengthInput = screen.getByLabelText('Strength');
    fireEvent.change(strengthInput, { target: { value: '15' } });

    expect(character.getAttribute('strength')).toBe(15);
    expect(onUpdate).toHaveBeenCalledWith(character);
  });

  it('clamps attribute values between 1 and 20', () => {
    render(<CharacterSheet character={character} onUpdate={onUpdate} />);

    const strengthInput = screen.getByLabelText('Strength');
    fireEvent.change(strengthInput, { target: { value: '25' } });

    expect(character.getAttribute('strength')).toBe(20);
  });
});
