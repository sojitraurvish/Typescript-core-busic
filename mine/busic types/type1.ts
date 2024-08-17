p:string | number

1) p as string
2) typeof p.child === 'string'
3) settings?: {
    [key:string]: number | boolean
  } | {}

4)function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
\

5)function sayHi(name: string) {
  return `Hi, ${name}!`
}

sayHi('Giovanni') // Hi, Giovanni!
type SayHiReturnType = ReturnType<typeof sayHi> // string

6)type User = {
  id: number;
  name: string;
  email?: string; // Optional property
};

const user: User = {
  id: 1,
  name: "Alice",
};

if ("email" in user) {
  console.log("User has an email property");
} else {
  console.log("User does not have an email property");
}
7)
const buttonColors = {
  //readonly due to as const  
primary:'text-text-primary-light ',
mine:'text-text-primary-light ',
 
} as const;
type ButtonColor = keyof typeof buttonColors;
output "primary" | "mine"
Note: typeof is used to get type of actual object
Note: where as keyof is used to get keys of object's type
understand this very carefully

8) [P in keyof T]?: T[P];