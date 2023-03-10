/**
 * Defines a Pokemon :
 * - id: Number
 * - name: String
 * - description: String
 * - genus: String
 * - spriteUrl: String
 * - captureRate: Number
 * - baseHappiness: Number
 * - isBaby: Boolean
 * - isLegendary: Boolean
 * - isMythical: Boolean
 * - hatchCounter: Number
 * - habitat: String
 * - generation: String
 */
interface Pokemon {
  id: number;
  name: string;
  description: string;
  genus: string;
  spriteUrl: string;
  captureRate: number;
  baseHappiness: number;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  habitat: string;
  generation: string;
}
