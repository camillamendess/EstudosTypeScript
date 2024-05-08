// Type
type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string,
  age: number
  email?: string // ? - Opcional
  password?: string
  orders: Order[]; // Types em conjunto
};

const user: User = {
  firstName: "Jane",
  age: 20,
  orders: [{productId: "11", price: 200}]
}

const printLog = (message: string) => {}

printLog(user.password!); // Tira o undefined

// Unions - União de props
type Author = {
  books: string[];
}

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "blabla@gmail.com",
  firstName: "Blabla",
  orders: [],
}

// Interfaces
interface UserInterface {
  readonly firstName: string // Não tem como alterar
  email: string
}

const emailUser: UserInterface = {
  email: "felli@gmail.com",
  firstName: "Felipe",
}

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: "Caio",
  books: [],
}

type Grade = number | string;
const grade: Grade = 1;



