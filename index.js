// Code your solution in this file!
function distanceFromHqInBlocks(number){
   return number > 42 ? number - 42 : 42 - number 
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) * 264
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start,end){
return start > end ? (start - end) * 264 : (end - start) * 264 
}

distanceTravelledInFeet()

function calculatesFarePrice(start,end) {
    let dis = distanceTravelledInFeet(start,end) ;
    if (dis <= 400) {
        dis = 0;
    } else if (dis > 400 && dis < 2000) {
        dis =  (dis - 400) * .02 ;
    } else if (dis > 2000 && dis < 2500) { 
       dis = 25; 
    } else { dis = 'cannot travel that far' ;}
    return dis;
}
calculatesFarePrice()