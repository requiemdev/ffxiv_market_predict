export enum DataCentre {
  Aether = "Aether",
  Primal = "Primal",
  Crystal = "Crystal",
  Chaos = "Chaos",
  Light = "Light",
  Elemental = "Elemental",
  Gaia = "Gaia",
  Mana = "Mana",
  Meteor = "Meteor",
  Materia = "Materia",
  Dynamis = "Dynamis"
}

export const WorldsByDataCentre: Record<DataCentre, string[]> = {
  [DataCentre.Aether]: [
    "Adamantoise", "Cactuar", "Faerie", "Gilgamesh", "Jenova", "Midgardsormr", "Sargatanas", "Siren"
  ],
  [DataCentre.Primal]: [
    "Behemoth", "Excalibur", "Exodus", "Famfrit", "Hyperion", "Lamia", "Leviathan", "Ultros"
  ],
  [DataCentre.Crystal]: [
    "Balmung", "Brynhildr", "Coeurl", "Diabolos", "Goblin", "Malboro", "Mateus", "Zalera"
  ],
  [DataCentre.Chaos]: [
    "Cerberus", "Louisoix", "Moogle", "Omega", "Phantom", "Ragnarok", "Sagittarius", "Spriggan"
  ],
  [DataCentre.Light]: [
    "Alpha", "Lich", "Odin", "Phoenix", "Raiden", "Shiva", "Twintania", "Zodiark"
  ],
  [DataCentre.Elemental]: [
    "Aegis", "Atomos", "Carbuncle", "Garuda", "Gungnir", "Kujata", "Ramuh", "Tonberry", "Typhon"
  ],
  [DataCentre.Gaia]: [
    "Alexander", "Bahamut", "Durandal", "Fenrir", "Ifrit", "Ridill", "Tiamat", "Ultima", "Valefor", "Yojimbo", "Zeromus"
  ],
  [DataCentre.Mana]: [
    "Anima", "Asura", "Chocobo", "Hades", "Ixion", "Masamune", "Pandaemonium", "Shinryu", "Titan"
  ],
  [DataCentre.Meteor]: [
    "Belias", "Mandragora", "Ramuh", "Shinryu", "Unicorn", "Valefor", "Yojimbo", "Zeromus"
  ],
  [DataCentre.Materia]: [
    "Bismarck", "Ravana", "Sephirot", "Sophia", "Zurvan"
  ],
  [DataCentre.Dynamis]: [
    "Halicarnassus", "Maduin", "Marilith", "Seraph"
  ]
};