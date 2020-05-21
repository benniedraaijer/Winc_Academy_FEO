// Functie 1
const rest = (...X) => {
    return X.reduce((a, c) => {
        return a + c;
    })
}
// Functie 2
const spread = (x, y, z) => {
    return x + y + z
}

console.log(rest(1, 5, 2, 7, 9, 4, 5, 6, 3, 2, 5, 2, 5, 41, 7, 8, 9, 2, 5))
console.log(spread(...[20, 12, 1985]))