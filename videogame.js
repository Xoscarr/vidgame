/*default values*/
let hunger=25;
let happiness=30;
let energy=45;


function displayValues(){
    document.getElementById("petHunger").innerHTML=`
    ${hunger}`;
    document.getElementById("petHappiness").innerHTML=`
    ${happiness}`;
    document.getElementById("petEnergy").innerHTML=`
    ${energy}`;


}

function feed(){

    if(hunger==100){ 
        hunger==100;

    }else{   hunger=hunger-10; //decrease the hunger

    document.getElementById("petHunger").innerHTML=`
    ${hunger}`; //update the hunger on html

    //increase energy

    energy=energy+10

    document.getElementById("petEnergy").innerHTML=`
    ${energy}`


    }
    
 
    }

    

function pet(){
    //increase the happiness (10 points)
    happiness=happiness+10;

    document.getElementById("petHappiness").innerHTML=`
    ${happiness}`;


}
function play(){
    // decrease the energy
    energy=energy-5;

    document.getElementById("petEnergy").innerHTML=`
    ${energy}`;
    //increase the happiness
    happiness=happiness+10;

    document.getElementById("petHappiness").innerHTML=`
    ${happiness}`;

    // increase hunger
    hunger=hunger+5;

    document.getElementById("petHunger").innerHTML=`
    ${hunger}`;
}

displayValues();

feed();

pet();

play();