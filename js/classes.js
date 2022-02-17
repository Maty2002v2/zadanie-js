// class Singleton {
//   constructor(props) {
//     if (Singleton.exists) {
//       return Singleton.instance;
//     }

//     this.props = props;

//     Singleton.exists = true;
//     Singleton.instance = this;

//     return this;
//   }
// }

// class ResourcesStorage extends Singleton {
//   constructor(props = {}) {
//     super(props);
//   }
// }

// class Singleton {
//   constructor(classChild) {
//     if (classChild.exists) {
//       return classChild.instance;
//     }

//     classChild.exists = true;
//     classChild.instance = t;

//     return classChild;
//   }
// }

class ResourcesStorage {
  constructor(
    props = {
      coalStatus: 0,
      uraniumStatus: 0,
      heliumStatus: 0,
      antimatterStatus: 0,
    }
  ) {
    if (ResourcesStorage.exists) {
      return ResourcesStorage.instance;
    }

    this._coalStatus = props.coalStatus;
    this._uraniumStatus = props.uraniumStatus;
    this._heliumStatus = props.heliumStatus;
    this._antimatterStatus = props.antimatterStatus;

    ResourcesStorage.exists = true;
    ResourcesStorage.instance = this;

    return this;
  }

  get coalStatus() {
    return this._coalStatus;
  }

  set coalStatus(value) {
    this._coalStatus += value;
  }

  get uraniumStatus() {
    return this._uraniumStatus;
  }

  set uraniumStatus(value) {
    this._uraniumStatus += value;
  }

  get heliumStatus() {
    return this._heliumStatus;
  }

  set heliumStatus(value) {
    this._heliumStatus += value;
  }

  get antimatterStatus() {
    return this._antimatterStatus;
  }

  set antimatterStatus(value) {
    this._antimatterStatus += value;
  }
}

//----------------
class EnergyPalntsFactory {
  constructor(type, props) {
    return new registerTypeEnergyPalntsFactory[type](props);
  }
}

class AbstractEnergyPlant {
  constructor() {
    if (this.constructor === AbstractEnergyPlant) {
      throw new TypeError("Abstract classes can't be instantiated.");
    }
  }

  energyProduction() {
    throw new Error("Method 'energyProduction()' must be implemented.");
  }
}

let registerTypeEnergyPalntsFactory = {};

registerTypeEnergyPalntsFactory["CoalPlant"] = class CoalPlant extends (
  AbstractEnergyPlant
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  energyProduction() {
    if (this.resourcesStorage.coalStatus > 100) {
      this.resourcesStorage.coalStatus = -100;
      return 7;
    }

    return 0;
  }
};

registerTypeEnergyPalntsFactory["SolarPlant"] = class SolarPlant extends (
  AbstractEnergyPlant
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  energyProduction() {
    return 2;
  }
};

registerTypeEnergyPalntsFactory["NuclearPlant"] = class NuclearPlant extends (
  AbstractEnergyPlant
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  energyProduction() {
    if (this.resourcesStorage.uraniumStatus > 1) {
      this.resourcesStorage.uraniumStatus = -1;
      return 10000;
    }

    return 0;
  }
};

registerTypeEnergyPalntsFactory["FusionPlant"] = class FusionPlant extends (
  AbstractEnergyPlant
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  energyProduction() {
    if (this.resourcesStorage.heliumStatus > 1) {
      this.resourcesStorage.heliumStatus = -1;
      return 20000;
    }

    return 0;
  }
};

registerTypeEnergyPalntsFactory[
  "AnnihilationPlant"
] = class AnnihilationPlant extends AbstractEnergyPlant {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  energyProduction() {
    if (this.resourcesStorage.antimatterStatus > 1) {
      this.resourcesStorage.antimatterStatus = -1;
      return 25000;
    }

    return 0;
  }
};

//----------------
class MinesFactory {
  constructor(type, props) {
    return new registerTypeMinesFactory[type](props);
  }
}

class AbstractMines {
  constructor() {
    if (this.constructor === AbstractMines) {
      throw new TypeError("Abstract classes can't be instantiated.");
    }
  }

  resourceExtraction() {
    throw new Error("Method 'resourceExtraction()' must be implemented.");
  }
}

let registerTypeMinesFactory = {};

registerTypeMinesFactory["CoalMine"] = class CoalMine extends AbstractMines {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  resourceExtraction() {
    this.resourcesStorage.coalStatus = 40;
  }
};

registerTypeMinesFactory["UraniumMine"] = class UraniumMine extends (
  AbstractMines
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  resourceExtraction() {
    this.resourcesStorage.uraniumStatus = 100;
  }
};

registerTypeMinesFactory["MoonMine"] = class MoonMine extends AbstractMines {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  resourceExtraction() {
    this.resourcesStorage.heliumStatus = 10;
  }
};

registerTypeMinesFactory["HadronCollider"] = class HadronCollider extends (
  AbstractMines
) {
  constructor() {
    super();
    this.resourcesStorage = new ResourcesStorage();
  }

  resourceExtraction(day) {
    if (day % 7 == 0 && day > 0) {
      this.resourcesStorage.antimatterStatus = 1;
    }
  }
};

//----------------
class AbstractEnergyFor {
  constructor() {
    if (this.constructor === EnergyFor) {
      throw new TypeError("Abstract classes can't be instantiated.");
    }
  }

  checkStateOfEnergy() {
    throw new Error("Method 'checkStateOfEnergy()' must be implemented.");
  }
}

class EnergyForNewYork extends AbstractEnergyFor {
  static checkStateOfEnergy(unitOfEnergy, day) {
    if (unitOfEnergy >= 10000) {
      console.log(`Jasno na ulicach w New York, dnia , ${day}`);
      return unitOfEnergy - 10000;
    }

    return unitOfEnergy;
  }
}

class EnergyForPoland extends AbstractEnergyFor {
  static checkStateOfEnergy(unitOfEnergy, day) {
    if (unitOfEnergy >= 40000) {
      console.log(`Jasno na ulicach w Polsce, dnia , ${day}`);
      return unitOfEnergy - 40000;
    }

    return unitOfEnergy;
  }
}

class EnergyForWorld extends AbstractEnergyFor {
  static checkStateOfEnergy(unitOfEnergy, day) {
    if (unitOfEnergy >= 6000000) {
      console.log(`Jasno na ulicach całego świata, dnia , ${day}`);
      return unitOfEnergy - 6000000;
    }

    return unitOfEnergy;
  }
}

export {
  EnergyPalntsFactory,
  MinesFactory,
  EnergyForNewYork,
  EnergyForPoland,
  EnergyForWorld,
};
