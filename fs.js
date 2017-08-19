fs = {};
fs.FileNode = class {
  constructor(sName) {
    this.name = sName;
    this.contents = {};
  }
}

fs.Directory = class extends fs.FileNode {}

fs.Directory.prototype.makeDir = function(sName) {
  this.contents[sName] = new fs.Directory(sName);
}
fs.Directory.prototype.makeFile = function(sName) {
  this.contents[sName] = new fs.File(sName);
}

fs.Filesystem = class extends fs.Directory {
  constructor(sName,sId) {
    super(sName);
    this.id = sId;
  }
}

fs.File = class extends fs.FileNode {}
fs.File.prototype.write = function(text) {
  if (this.contents.length > 0) {
    this.contents[this.contents.length] += text;
  } else {
    this.contents.push(text);
  }
}
fs.File.prototype.writeln = function(text) {
  this.write(text);
  this.contents.push("");
}
fs.File.prototype.overwrite = function(text) {
  this.contents = [];
  this.contents.push(text);
}

fs.Path = class extends Array {
  constructor(sPath) {
    super(0);
    var tl = sPath.split('/');
    for (i = 0; i < tl.length; i++) {
      if (tl[i] != "") {this.push(tl[i]);} else {continue;}
    }
    tl = null;
  }
}
fs.Path.prototype.join = function() {
  s0 = "";
  for (i = 0; i < this.length; i++) {
    s0 += "/"+this[i];
  }
  while (s0.includes("//")) {
    s0 = s0.replace("//","/");
  }
  return s0;
}


// Methods:
fs.mkdir = function(sPath) {
  Computer.Filesystem.contents[sPath] = new fs.Directory()
}
