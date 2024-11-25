import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExamplePage } from '../src/pages/ExamplePage';

describe('ExamplePage', () => {
  it('renders the character sheet', () => {
    render(<ExamplePage />);

    // Check for main sections
    expect(screen.getByText('Character Sheet')).toBeInTheDocument();
    expect(screen.getByText('Attributes')).toBeInTheDocument();
    expect(screen.getByText('Health')).toBeInTheDocument();

    // Check for attribute fields
    expect(screen.getByLabelText('Strength')).toBeInTheDocument();
    expect(screen.getByLabelText('Dexterity')).toBeInTheDocument();
    expect(screen.getByLabelText('Constitution')).toBeInTheDocument();
    expect(screen.getByLabelText('Intelligence')).toBeInTheDocument();
    expect(screen.getByLabelText('Wisdom')).toBeInTheDocument();
    expect(screen.getByLabelText('Charisma')).toBeInTheDocument();
  });
});
