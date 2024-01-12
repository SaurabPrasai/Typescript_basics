//aliases
type CarName=string
type CarYear=number;
type Car={
cName:CarName,
cYear:CarYear
}

const car:Car={
    cName:"Ford",
    cYear:4
}
//interface
interface Rectangle{
    length:number,
    breadth:number
}

const rectangle:Rectangle={
    length:2,
    breadth:4
}

const areaOfRectanle=():number=>{
    return rectangle.length*rectangle.breadth;
}

console.log(areaOfRectanle());

interface Cuboid extends Rectangle{
    height:number
}

let volumeOfCuboid:Cuboid={
    length,
    breadth:2,
    height:5
}

console.log(volumeOfCuboid);