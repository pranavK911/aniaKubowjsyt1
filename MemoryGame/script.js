const productArray=[
    {
        name:'fries',
        img:'Images/fries.png',
    },
    {
        name:'hotdog',
        img:'Images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'Images/ice-cream.png',
    },
    {
        name:'pizza',
        img:'Images/pizza.png',
    },
    {
        name:'milkshake',
        img:'Images/milkshake.png',
    },
    {
        name:'cheeseburger',
        img:'Images/cheeseburger.png',
    },
    {
        name:'fries',
        img:'Images/fries.png',
    },
    {
        name:'hotdog',
        img:'Images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'Images/ice-cream.png',
    },
    {
        name:'pizza',
        img:'Images/pizza.png',
    },
    {
        name:'milkshake',
        img:'Images/milkshake.png',
    },
    {
        name:'cheeseburger',
        img:'Images/cheeseburger.png',
    },
]

productArray.sort(()=> 0.5-Math.random());

const gridDisplay=document.querySelector('.grid');

function createBox(){
   for(let i=0;i<productArray.length;i++){
        const ele=document.createElement('img');
        ele.setAttribute('src','Images/blank.png')
        gridDisplay.appendChild(ele);
        console.log(ele);
    }
}
createBox();
// console.log(productArray);