const pokemon = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// Examples:

// Names that start with B
const bListPkmn = pokemon.filter((p) => p.name[0] === "B");

// Array of just IDs
const pkmnIds = pokemon.map((p) => p.id);

// Assignemts:

// Pokemon whos IDs are divisible by 3
const idByThree = pokemon.filter((p) => p.id % 3 === 0);
// console.log(idByThree);

// Pokemon who are fire type
const fireTypes = pokemon.filter((p) => p.types.includes("fire"));
// console.log(fireTypes);

// Pokemon with more than 1 type
const multTypes = pokemon.filter((p) => p.types.length > 1);
// console.log(multTypes);

// Pokemon Names
const pokeNames = pokemon.map((p) => p.name);
// console.log(pokeNames);

// Pokemon names who are poison type
const poisonPoke = pokemon
    .filter((p) => p.types.includes("poison"))
    .map((p) => p.name);
// console.log(poisonPoke);

// First type of all pokemon who are also flying type
const otherFlying = pokemon
    .filter((p) => p.types.includes("flying", 1))
    .map((p) => p.types[0]);
// console.log(otherFlying);

// Count of pokemon who are only normal type
const normals = pokemon
    .filter((p) => p.types.includes("normal"))
    .filter((p) => p.types.length === 1).length;
// console.log(normals);
