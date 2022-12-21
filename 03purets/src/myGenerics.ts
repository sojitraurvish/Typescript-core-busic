const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

 identityFour({})
//  identityFour<Bootle>({}) here i have to pass datatype because i want to user define datatype

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => { 
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}



// Type norrowing------------------------------------------------

function printAll(strs:string | string[] |null){
  if(strs){
    if(typeof strs==="object"){
      for(const s of strs){
        console.log(s);
      }
    }
    else if(typeof strs ==="string"){
      console.log(strs)
    }
  }
}

// ------------------------------------------------

interface User{
  name:string,
  email:string
}

interface Admin{
  name:string,
  email:string,
  isAdmin:boolean
}

function isAdmin(account:User|Admin){
  if("isAdmin" in account){
    return account.isAdmin;
  }
}

// --------------------------------------------------
  function logValue(x:Date | string){
    if(x instanceof Date){
      console.log(x.toUTCString());
    }
     else{
      console.log(x.toUpperCase());
      
     } 
  }

// --------------------------------------------------
  //type predicate

  type Fish1={swim:()=>void};
  type Bird1={swim:()=>void};

  // function isFish(pet: Fish | Bird){
  //   return (pet as Fish).swim !== undefined;
  // }

  function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined;
  }

  function getFood(pet:Fish | Bird){
    if(isFish(pet)){
      pet
      return "fish food"
    }
    else{
      pet
      return "bird food"
    }
  }
// --------------------------------------------------

  //discriminating union

  interface Circle{
    kind:"circle",
    radius:number
  }
  
  interface Square{
    kind:"square",
    radius:number
  }
  
  interface Rectangle{
    kind:"rectangle",
    radius:number,
    width:number
  }

  // type Shape1=Circle|Square;
  type Shape1=Circle|Square|Rectangle ;

  function getTrueShape(shape:Shape1){
    if(shape.kind==="circle"){
      return Math.PI* shape.radius **2
    }
    // return shape.side * shape.side
  }

  function getArea(shape:Shape){
    switch(shape.kind){
      case "circle":
        return Math.PI * shape.radius**2
      case "square":
        return Math.PI * shape.radius**2
      case "rectangle":
        return Math.PI * shape.radius**2


      default:
        const _defaultforshape:never=shape
        return _defaultforshape
    }

  }
// --------------------------------------------------

// function myFun<T>(b:T):T{
//     return b;
// }

// let myVar=<T,>(b:T):T =>{
//  return b;
// }





// interface Mine{
// 	username:string
// }

// type Action<T extends Mine,P>={
//     type:T,
//     isAdmin:P
// }

// // type Action<T = Mine,P>={
// //     type:T,
// //     isAdmin:P
// // }


// const car: Action<> = {
//   type:{username:"fdfsdf"},
//   isAdmin:"fsdfdfs"
// };

// console.log(car);

// type ActionWithPayload<T,P>={
//     type:T;
//     payload:P;
// }

// function createAction<T extends Mine , P = string>(type:T,payload:P):ActionWithPayload<T,P>{
//     return {type,payload};
// }

// interface Bootle{
//   username:string,
//     brand: string,
//     type: number
// }

// console.log(createAction<Bootle,number>({username:"this obj",brand:"dsfsd",type:4},3))


// predicate is kind of function that verifies whether a specific argument that it receives is going to be a narrower type or not

type Alien ={
    fly:()=>{}
}

type Human={
    speck:()=>{} 
}

function isHuman(entity:Human | Alien):entity is Human{ //this is predicate
    return (entity as Human).speck !== undefined;
}

const josh:Human={
  speck:()=>{
        return 34;
    }
}

if(isHuman(josh)){
    josh.speck();
}

// how to get return type of function

// type myType ={
//     name:string
// }

// type myFunc=()=>myType

// type myReturn=ReturnType<myFunc>

type arr=Array<string>

const last = <T,>(arr:T[])=>{
  return arr[arr.length-1];
}
const n= last([1,2,3]);
const s= last(["sf","f","f"]);

const past = <T,>(arr:T[]): T =>{
  return arr[arr.length-1];
}
const str= past<string>(["sf","f","f"]);

// const makeArr=<T,Y>(x:T,y:Y)=>{
//   return [x,y];
// }

// const v=makeArr(5,5);
// const t=makeArr("Df","Fd");
// const l=makeArr("Df",4);//here is proble check infered type of l

// Y=any this is default value if none is specified
const makeArr=<T,Y=number>(x:T,y:Y):[T,Y]=>{
  return [x,y];
}

const v=makeArr(5,5);
const t=makeArr("Df","Fd");
const l=makeArr<string|null,number>(null,4);
const c=makeArr<string|null>(null,4);


// const makeFullName=(obj:{firstName:string,lastName:string})=>{
//   return {
//     ...obj,
//     fullName:obj.firstName+" "+obj.lastName
//   }
// }

// const v4=makeFullName({firstName:"bob",lastName:"juiner",age:12});

const makeFullName=<T extends {firstName:string,lastName:string}>(obj:T)=>{
  return {
    ...obj,
    fullName:obj.firstName+" "+obj.lastName
  }
}
//in genrics if you don't specify type<> and retrun type in fucntion genric then it will take autometically
const v4=makeFullName({firstName:"bob",lastName:"juiner",age:12})
const v5=makeFullName({firstName:"bob",lastName:"juiner",age:12})


interface Tab<T>{
  id:string;
  position:number;
  data:T;
}

type NumberTab=Tab<number>;
// type NumberTab1={ //above statement is equivalent to this 
//   id:string;
//   position:number;
//   data:number;
// }
type StringTab=Tab<string>;




// & ment you have to assign all the property and if any property have any as type then and only you can modify it 
type mySelf<T>={
  ltype:T,
  age:number
}

type myKnowlede<T>=mySelf<T> & {
  ltype:number
  digree:string,
  marksIn12th:number
}

// type myDetails= mySelf & myKnowlede;

let mine:myKnowlede<any>={
  ltype:12,
  age:20,
  digree:"bscit",
  marksIn12th:56
}

let joice=<AC=string>(obj:AC):{fatherName:AC}=>{
 return {fatherName:obj};
 
}

let myVer=joice("fdf");

type Match<T>={
  fatherName:T
}

let joice=<AC=string>(obj:AC):Match<AC>=>{
 return {
  fatherName:obj
 }
}

let myVer=joice<string>("fdf");

