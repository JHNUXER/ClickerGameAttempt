Computer = {};
Computer.Hardware = [];
Computer.CPUSpeed = 0;
Computer.Memory = 1000;

class Hardware {
  constructor(sName,nCPUConsumption) {
    this.name = sName;
    this.cpuConsumption = nCPUConsumption;
  }
}
Hardware.prototype.onInstall = function() {
  Computer.CPUSpeed -= this.cpuConsumption;
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
Game.version = "v0.0.2ppa";
Game.HardwareById = [
  new Hardware("BasicCPU",-5)
//   new Drive("Basic Hard Drive",4,1000)
];
Game.Hardware = {};
for (i = 0; i < Game.HardwareById.length; i++) {
  Game.Hardware[Game.HardwareById[i].name] = Game.HardwareById[i];
}

Computer.installHardware = function(x) {
  Computer.hardware.push(x);
  x.onInstall();
}
