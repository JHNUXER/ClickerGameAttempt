/*
  Created by JOHNHOGANUKE (AKA JHNUXER)
*/

Computer = {};
Computer.Hardware = [];
Computer.CPUSpeed = 0;
Computer.Memory = 1000;
Computer.PhysicalMemory = 100000;

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
Game.version = document.getElementById("title").innerText.replace("CPUClicker ","");
Game.HardwareById = [
  new Hardware("BasicCPU",-5)
//   new Drive("Basic Hard Drive",4,1000)
];
Game.Hardware = {};
for (i = 0; i < Game.HardwareById.length; i++) {
  Game.Hardware[Game.HardwareById[i].name] = Game.HardwareById[i];
}

Game.update = function() {
  var cpu = document.getElementById("cpu");
  var ram  = document.getElementById("memory");
  cpu.innerText = ""+Computer.CPUSpeed;
  ram.innerText = ""+Computer.Memory;
}

Computer.installHardware = function(x) {
  Computer.Hardware.push(x);
  x.onInstall();
  Game.update();
}
