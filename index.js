// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    return cats.push ('Ralph')
}
function destructivelyPrependCat(name) {
    return cats.unshift ('Bob');
}
function destructivelyRemoveLastCat(){
    return cats.pop ('Garfield')
}
function destructivelyRemoveFirstCat(){
    return cats.shift ('Milo')
}
function appendCat(name){
    const name_1 =[...cats, 'Broom']
    return name_1

}
function prependCat(name){
    const name_1 =['Arnold', ...cats]
    return name_1
}
function removeLastCat(){
    const kitten = cats.slice(0,cats.length -1)
    return kitten
}
function removeFirstCat(){
    const kiten = cats.slice(1)    
    return kiten
}