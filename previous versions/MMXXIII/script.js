function transposeUp(id) {
  var str = document.getElementById(id).innerHTML;

  var mapObj = {
    cis: "d",
    Cis: "D",
    dis: "e",
    Dis: "E",
    fis: "g",
    Fis: "G",
    gis: "a",
    Gis: "A",
    c: "cis",
    d: "dis",
    e: "f",
    f: "fis",
    g: "gis",
    a: "b",
    b: "h",
    h: "c",
    C: "Cis",
    D: "Dis",
    E: "F",
    F: "Fis",
    G: "Gis",
    A: "B",
    B: "H",
    H: "C",
  };
  var result = str.replace(
    /cis|dis|fis|gis|c|d|e|f|g|a|b|h|Cis|Dis|Fis|Gis|C|D|E|F|G|A|B|H/g,
    function (matched) {
      return mapObj[matched];
    }
  );
  document.getElementById(id).innerHTML = result;
}

function transposeDown(id) {
  var str = document.getElementById(id).innerHTML;

  var mapObj = {
    cis: "c",
    Cis: "C",
    dis: "d",
    Dis: "D",
    fis: "f",
    Fis: "F",
    gis: "g",
    Gis: "G",
    c: "h",
    d: "cis",
    e: "dis",
    f: "e",
    g: "fis",
    a: "gis",
    b: "a",
    h: "b",
    C: "H",
    D: "Cis",
    E: "Dis",
    F: "E",
    G: "Fis",
    A: "Gis",
    B: "A",
    H: "B",
  };
  var result = str.replace(
    /cis|dis|fis|gis|c|d|e|f|g|a|b|h|Cis|Dis|Fis|Gis|C|D|E|F|G|A|B|H/g,
    function (matched) {
      return mapObj[matched];
    }
  );

  document.getElementById(id).innerHTML = result;
}
