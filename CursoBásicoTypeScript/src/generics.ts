// Passar tipos como parametros
const returnValue = <T>(value: T) => value;

const message = returnValue<String>("Hello");
const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
};

const firstValueFromStringArray = <String>getFirstValueFromArray(["OI", "HI"]);
const firstValueFromNumberArray = <number>getFirstValueFromArray([10, 20]);

// Promises
const returnPromise = async ():Promise<string> => {
  return "Seja bem vindo";
}

// Classes
class GenericNumber<T> {
  zeroValue: any
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T){
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) => {
  return x + y;
})


