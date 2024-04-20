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
const score=document.getElementById('score');

function createBox(){
   for(let i=0;i<productArray.length;i++){
        const ele=document.createElement('img');
        ele.setAttribute('src','Images/blank.png')
        ele.setAttribute('data-id',i);
        gridDisplay.appendChild(ele);
        ele.addEventListener('click',flipCard);
        // console.log(ele);
    }
}
console.log(productArray);
createBox();
// console.log(productArray);
let selectedCard=[];
let clickedCardId=[];
let points=0;
function flipCard(){
            const im=this.getAttribute('data-id');
            // console.log('clicked',im);
            // console.log(productArray);
            // console.log(productArray[im].name);
            this.setAttribute('src',productArray[im].img);
            selectedCard.push(productArray[im].name);
            clickedCardId.push(im);
            // console.log(selectedCard);
            if(selectedCard.length===2){
                setTimeout(checkMatch,300);
            }
        }
function checkMatch(){
    const divCard=document.querySelectorAll('img');
    console.log(divCard);
    console.log(clickedCardId);
    if(selectedCard[0]==selectedCard[1]){
        // console.log('okkkk');
        divCard[clickedCardId[0]].setAttribute('src','Images/white.png')
        divCard[clickedCardId[1]].setAttribute('src','Images/white.png')
        divCard[clickedCardId[0]].removeEventListener('click',flipCard);
        divCard[clickedCardId[1]].removeEventListener('click',flipCard);
        points++;
        score.innerHTML=points;
        if(points==6){
            score.innerHTML='you won the Game';
        }
         
    }else{
       divCard[clickedCardId[0]].setAttribute('src','Images/blank.png')
       divCard[clickedCardId[1]].setAttribute('src','Images/blank.png')
    }
     
     selectedCard=[] ;
     clickedCardId=[];

     console.log(selectedCard);
    }
