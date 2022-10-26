{
    "nombre": "Karen Rosas",
    "edad": 21,
    "nacionalidad": "mexicana"
}

var json = '{"nombre": "Karen":, "edad":21, "nacionalidad":"mexicana"}';
var obj = JSON.parse(json);console.log(obj.nombre);obj.nombre = "pedro";
console.log(obj.nombre);

var json = '{"nombre": "Manuel":, "edad":51, "nacionalidad":"mexicana", "hobies": ["ajedrez]}';
var obj = JSON.parse(json);console.log(obj.nombre);obj.nombre = "pedro";
console.log(obj.nombre);