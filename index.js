rand = Math.random;
randr = function(min,max) {
  return (rand() * (max - min)) + min;
}
round = function(x,n) {
  return parseInt(x.toFixed(n));
}
randro = function(min,max,n) {
  return round(randr(min,max));
}

r10 = function() {return randro(0,10,2);}
ro10 = r10;

class Employee {
  constructor(sName="") {
    this.name = sName;
    this.agility = r10();
    this.efficiency = ro10();
    this.intelligence = r10();
    this.stamina = r10();
    this.strength = r10();
    this.wisdom = r10();
  }
}

function compileStatsTable(emp) {
  var s0 = "<table><tbody>";
  s0 += "<tr><td><b>agility</b></td><td>"+emp.agility+"</td></tr>"
  s0 += "<tr><td><b>efficiency</b></td><td>"+emp.efficiency+"</td></tr>"
  s0 += "<tr><td><b>intelligence</b></td><td>"+emp.intelligence+"</td></tr>"
  s0 += "<tr><td><b>stamina</b></td><td>"+emp.stamina+"</td></tr>"
  s0 += "<tr><td><b>strength</b></td><td>"+emp.strength+"</td></tr>"
  s0 += "<tr><td><b>wisdom</b></td><td>"+emp.wisdom+"</td></tr>"
  s0 += "</tbody></table>";
  return s0;
}

class EmployeeTableController {
  constructor(tTable) {
    this.table = tTable;
  }

}
EmployeeTableController.prototype.addRow = function(empl) {
  var cols = [empl.name,compileStatsTable(empl),"<font color='red'>$10.00</font>"];
  var s0 = "<tr>";
  for (i = 0; i < cols.length; i++) {
    s0 += "<td>"+cols[i]+"</td>";
  }
  s0 += "</tr>";
  this.table.innerHTML += s0;
}
