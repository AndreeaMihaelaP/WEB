// 1. BigInt

// A large number, larger than MAX_SAFE_INTEGER
typeof 1n;

// 2. Optional Chaining Operator ?.
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
  },
};

let andi_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
  },
};

let weight = will_pokemon.pikachu.weight;
let weight2 = andi_pokemon.pikachu.weight;

if (andi_pokemon.pikachu && andi_pokemon.pikachu.weight) {
  let weight2 = andi_pokemon.pikachu.weight;
} else {
  let weight2 = undefined;
}

// that if is equivalent with
let weight2 = andi_pokemon?.pikachu?.weight;

// 3. Nullish Coalescing Operator ?? ||

let andi_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lighting",
  },
};

let power = andi_pokemon?.raichu?.power || "no power"; // check if it's thruthy
// ?? check if its null or undefined and return the right operator
