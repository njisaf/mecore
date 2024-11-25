// Since we don't have direct access to Foundry types yet, we'll define a basic structure
// that we can expand once we have proper type definitions

interface CharacterSystemData {
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  health: {
    value: number;
    max: number;
  };
  biography: {
    name: string;
    background: string;
  };
}

export class CharacterDataModel {
  data: CharacterSystemData;

  constructor(data: Partial<CharacterSystemData> = {}) {
    this.data = {
      attributes: {
        strength: data.attributes?.strength ?? 10,
        dexterity: data.attributes?.dexterity ?? 10,
        constitution: data.attributes?.constitution ?? 10,
        intelligence: data.attributes?.intelligence ?? 10,
        wisdom: data.attributes?.wisdom ?? 10,
        charisma: data.attributes?.charisma ?? 10
      },
      health: {
        value: data.health?.value ?? 10,
        max: data.health?.max ?? 10
      },
      biography: {
        name: data.biography?.name ?? "",
        background: data.biography?.background ?? ""
      }
    };
  }

  // Getters and setters for the data
  getAttribute(name: keyof CharacterSystemData['attributes']): number {
    return this.data.attributes[name];
  }

  setAttribute(name: keyof CharacterSystemData['attributes'], value: number): void {
    this.data.attributes[name] = Math.max(1, Math.min(20, value));
  }

  getHealth(): CharacterSystemData['health'] {
    return { ...this.data.health };
  }

  setHealth(value: number): void {
    this.data.health.value = Math.max(0, Math.min(this.data.health.max, value));
  }

  setMaxHealth(value: number): void {
    this.data.health.max = Math.max(0, value);
    this.data.health.value = Math.min(this.data.health.value, this.data.health.max);
  }
}
