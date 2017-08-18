Computer = {};
Computer.Hardware = [];

class Hardware {
  constructor(sName,nCPUConsumption) {
    this.name = sName;
    this.cpuConsumption = nCPUConsumption;
  }
}
Hardware.prototype.onInstall = function() {
  return;
}

class Drive extends Hardware {
  constructor(sName,nCPUConsumption,nStorageBytes) {
    super(sName,nCPUConsumption);
    this.totalStorage = nStorageBytes;
    this.avaliableStorage = nStorageBytes;
  }
}

// Init:
Game = {};
Game.version = "v0.0.1ppa";
Game.Hardware = [
  new Drive("Basic Hard Drive",4,1000)
]

Computer.installHardware = function(x) {
  Computer.hardware.push(x);
  x.onInstall();
}
