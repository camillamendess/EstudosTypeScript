// Classes, atributos e métodos típados

interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number; // readonly - Lê somente uma vez
  protected name: string; // protected - Só pode ser modificada dentro da classe, assim como a private
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }

}

// Outra maneira de criar classes (mais simples)
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
};

class Employee extends Person {
  constructor (id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI(){
    return this.name // Retorna pois não é protected ou private
  }
}

// Instancia de objeto
const personOne = new Person(1, "Edinho", 40);