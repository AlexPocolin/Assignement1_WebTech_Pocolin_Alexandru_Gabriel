const input0 = 10
const input1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
const dictionary0 = ['ipsum', 5]
const dictionary1 = ['ipsum', 'elit']
const dictionary2 = ['test']
const dictionary3 = ['lorem']

function hash(input,dictionary){
    if(typeof(input)!== "string") 
        throw new Error("Input should be a string");
    dictionary.forEach(element => {
        if(typeof element!=="string"){
            throw new Error("Invalid dictionary format");
            }
        });
    var y= ""
    for (i=0;i<dictionary.length;i++){
    for(j=0;j<dictionary[i].length;j++){
        if(j==0||j==dictionary[i].length-1)
            y+=dictionary[i][j]
            else
            y+="#"
    }
    input=input.replace(dictionary[i],y)
}
console.log(input);

console.log(dictionary);
}

