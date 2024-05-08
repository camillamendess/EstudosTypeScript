interface MathFunc {
  (x: number, y: number): number;
};

const sum: MathFunc = (num1: number, num2:number): number => {
  return num1 + num2;
};

const sub: MathFunc = (x:number, y:number) => {
  return x - y;
}

const valor = sum(1, 2);

console.log(valor);

const log = (message: string): void => {
  console.log(message);
};

