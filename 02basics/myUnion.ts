let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {name: "hitesh", id: 334}

hitesh = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: number[] | boolean[] = [false, true]
const data4: (string | number | boolean)[] = ["1", "2", 3, true]

let pi:3.14=3.14;
// pi=fdf;

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"