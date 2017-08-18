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

// Init:
Game = {};
Game.version = "v0.0.1ppa";

Computer.installHardware = function(x) {
  Computer.hardware.push(x);
  x.onInstall();
}
