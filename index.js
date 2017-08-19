Game = {};
Game.Hardware = {
  "base":class {
    constructor(sName,nPowerConsumption) {
      this.name = sName;
      this.powerConsumption = nPowerConsumption;
    }
  }
};
Game.Hardware.base.prototype.onInstall = function() {
  // var PSU = Computer.getPowerSupply();
  // if (PSU == null) {
  //   return false;
  // } else {
  //   PSU.connect(this);
  // }
  return true;
}
Game.Hardware.drive = class extends Game.Hardware.base {
  constructor(sName,nPC,nSize,nCapacity) {
    super(sName,nPC);
    this.capacity = {"free":nCapacity,"total":nCapacity};
    this.size = nSize;
  }
}
Game.Hardware.memory = class extends Game.Hardware.base {
  constructor(sName,nPC,nCapacity) {
    super(sName,nPC);
    this.capacity = nCapacity;
  }
}
Game.Hardware.processor = class extends Game.Hardware.base {
  constructor(sName,nPC,nClock,nOverclock) {
    super(sName,nPC);
    this.clock = {"speed":nClock,"max":nClock,"over":nOverclock};
  }
}
Game.Hardware.processor.prototype.getOverclockPower = function() {
  if (this.clock.speed <= this.clock.max) return this.powerConsumption;
  return ((this.clock.speed - this.clock.max)*0.15)+this.powerConsumption;
}
Game.Hardware.driveBay = class extends Game.Hardware.base {
  constructor(sName,nPC,nSize) {
    super(sName,nPC);
    this.size = nSize;
    this.installed = null;
  }
}
Game.Hardware.driveBay.prototype.canInstall = function(drive) {
  if (drive !instanceof Game.Hardware.drive) {return false;}
  return (drive.size == this.size) && (this.installed = null);
}

Prefixes = [
  "",
  "kilo",
  "Mega",
  "Giga",
  "Tera",
  "Peta",
  "Exa",
  "Zetta",
  "Yotta"
];

Computer = {}
Computer.Specs = {};
Computer.Specs.Memory = 1000;
Computer.Specs.ClockSpeed = 1;
Computer.Specs.PhysicalMemory = 100000;
Computer.Hardware = {};
Computer.Hardware.ProcessorSlots = [];
Computer.Hardware.DriveBays = [
  new Game.Hardware.driveBay("3.5\" Drive Bay",0,3.5);
];
Computer.Hardware.DriveBays[0].installed = new Game.Hardware.drive("Basic Hard Drive",2,3.5,100000);

function prefixify(value,unit,full = false) {
  var pfNdx = 0;
  while (value > 1000) {
    value /= 1000;
    pfNdx++;
    if (pfNdx > Prefixes.length) {
      var k = pfNdx - Prefixes.length;
      pfNdx = Prefixes.length;
      for (i = 0; i < k; i++) {
        value *= 1000;
      }
      break;
    }
  }
  var prefix = Prefixes[pfNdx];
  if (!full) {prefix = prefix.charAt(0);}
  if (!full) {
    switch (unit) {
      case "Hertz":
        unit = "Hz";
        break;
      default:
        unit = unit.charAt(0);
    }
  }
  var rval = value+prefix+unit;
  if (value > 1) {
    if (!(rval.endsWith("a") || rval.endsWith("e") || rval.endsWith("i") || rval.endsWith("o") || rval.endsWith("u"))) {rval += "e";}
    rval += "s";
  }
  return rval;
}

Game.update = function() {
  document.getElementById("memory").innerText = prefixify(Computer.Specs.Memory,"Byte");
  document.getElementById("cpu").innerHTML = prefixify(Computer.Specs.clockSpeed,"Hertz");
}

Computer.installHardware = function(h) {
  if (h instanceof drive) {
    // Computer.Hardware.DriveBays
  }
  h.onInstall;
}
