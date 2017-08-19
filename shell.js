shell = {};
shell.currDir = "/";
shell.resolve = function(dir) {
  return (shell.currDir + "/" + dir).replace("//","/");
}
shell.setDir = function(dir) {
  shell.currDir = dir;
}
shell.dir = function() {
  return currDir;
}
