---

# TypeScript Essentials

## 1. Basic Data Types

```typescript
let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
```

## 2. Object Type

```typescript
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};
```

## 3. Optional Properties

```typescript
type User = {
  username: string;
  age?: number; // age is optional
};

let user1: User = { username: "Mark" };
```

## 4. Literal Types

```typescript
let direction: "left" | "right" | "center" = "left";
```

## 5. Functions

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const result = greet("Anna"); // "Hello, Anna!"
```

## 6. Spread Operator

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

## 7. Rest Operator

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

## 8. Destructuring

```typescript
const profile = { name: "John", age: 30 };
const { name, age } = profile;
console.log(name, age);
```

## 9. Type Alias

```typescript
type ID = string | number;

let userId: ID = 101;
let productId: ID = "abc123";
```

## 10. Union Type

```typescript
let value: string | number = "Hello";
value = 123;
```

## 11. Intersection Type

```typescript
type Admin = { name: string; role: string };
type Employee = { id: number };

type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  name: "Sophia",
  role: "Manager",
  id: 1,
};
```

## 12. Ternary Operator

```typescript
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
```

## 13. Optional Chaining

```typescript
const data = {
  user: {
    profile: {
      name: "Jake",
    },
  },
};

console.log(data.user?.profile?.name); // "Jake"
console.log(data.user?.address?.city); // undefined (doesn't throw error)
```

## 14. Never Type

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

## 15. Unknown Type

```typescript
let input: unknown = "Hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

## 16. Nullable Type

```typescript
let comment: string | null = null;

comment = "Great post!";
console.log(comment);
```
