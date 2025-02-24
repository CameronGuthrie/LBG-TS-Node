// export function add(a: number, b: number): number {
//     return a + b;
// }

// export function subtract(a: number, b: number): number {
//     return a - b;
// }

export interface MathOperations {
    add(a: number, b: number): number;
    subtract(a: number, b:number): number;
}

export class Calculator implements MathOperations {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}