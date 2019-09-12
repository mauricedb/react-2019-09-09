export default function demo() {
  type PersonType = "male" | "female" | "unkown";

  function test(personType: PersonType) {
    switch (personType) {
      case "male":
        console.log("this is a male");
        break;
      case "female":
        console.log("this is a female");
        break;
      case "unkown":
        console.log("this is a female");
        break;
      default:
        const n: never = personType;
        throw Error("Unkown person type");
    }
  }
}

type Dog = {};

type Cat = {
  sleep(): any;
  name: string;
};

function isCat(pet: any): pet is Cat {
  return typeof pet.sleep === "function";
}

function goToSleep(cat: Cat | Dog) {
  if (isCat(cat)) {
    cat.sleep();
  }
}

const c: Dog = 1;

goToSleep(c);

function add(x: number, y: number) {
  return x + y;
}

const sum = add(1, 2);

function printCat(cat: Cat | null) {
  if (cat) {
    console.log(cat.name);
  }
  // console.log(cat!.name);
}

printCat({ name: "Zorro", sleep: () => {} });

printCat(null);
// printCat(undefined);
