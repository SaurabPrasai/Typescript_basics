enum direction{
    north,       //By default, enums will initialize the first value to 0
    south,east,west
}
console.log(direction.north);


enum statusCodes{
 notFound=404,
 success=200,
 redirect=300,
 serverError=500
}

console.log(statusCodes.notFound);