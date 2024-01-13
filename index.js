// Write your solution here!
let cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    let cats2=[...cats,name];
    return cats2;
}

function prependCat(name){
    let cats2=[name,...cats];
    return cats2;
}

function removeLastCat(){
    let cats2=cats.slice(0,-1);
     return cats2;
    }

    function removeFirstCat(){
        let cats2=cats.slice(1);
        return cats2;
    }