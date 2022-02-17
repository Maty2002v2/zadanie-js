import {
  EnergyPalntsFactory,
  MinesFactory,
  EnergyForNewYork,
  EnergyForPoland,
  EnergyForWorld,
} from "./classes.js";

try {
  let EnergyPalnts = [
    new EnergyPalntsFactory("CoalPlant"),
    new EnergyPalntsFactory("FusionPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("NuclearPlant"),
    new EnergyPalntsFactory("AnnihilationPlant"),
  ];
  let Mines = [
    new MinesFactory("CoalMine"),
    new MinesFactory("CoalMine"),
    new MinesFactory("UraniumMine"),
    new MinesFactory("MoonMine"),
    new MinesFactory("HadronCollider"),
  ];
  let unitOfEnergy = 0;
  let day = 0;

  while (day < 30) {
    EnergyPalnts.forEach((energyPalnts) => {
      unitOfEnergy += energyPalnts.energyProduction();
    });

    Mines.forEach((mine) => {
      mine.resourceExtraction(day);
    });

    unitOfEnergy = EnergyForNewYork.checkStateOfEnergy(unitOfEnergy, day);
    unitOfEnergy = EnergyForPoland.checkStateOfEnergy(unitOfEnergy, day);
    unitOfEnergy = EnergyForWorld.checkStateOfEnergy(unitOfEnergy, day);

    day++;
  }
} catch (error) {
  console.error(error);
}
