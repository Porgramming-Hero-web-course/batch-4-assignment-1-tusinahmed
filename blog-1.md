Union types in TypeScript allow a variable to hold multiple types, making functions more flexible. Intersection types combine multiple types into one, ensuring that an object satisfies all required properties from different types. Union types offer flexibility, while intersection types ensure type safety and object completeness. These features enhance code maintainability and prevent runtime errors.


let value: string | number;
value = 42;
value = "Hello";


interface Car {
    make: string;
    model: string;
}

interface Engine {
    type: string;
    horsepower: number;
}

type CarWithEngine = Car & Engine;

let myCar: CarWithEngine = {
    make: "Toyota",
    model: "Corolla",
    type: "Hybrid",
    horsepower: 150
};