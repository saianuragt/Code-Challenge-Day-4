//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them. 
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow. 
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins. 
// Write a function to compute their share's.


//Write a function to return calculate the of JackShare.
function find_JackShare(goldCoin,X,Y){
    let JackShare = (X/100)*goldCoin;
    return JackShare;
}


//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin,X,Y){
    let temp = (X/100)*goldCoin;
    let temp1 = goldCoin-temp;
    let BarbossaShare = (Y/100)*temp1;
    return BarbossaShare;
}


//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin,X,Y){
    let a = (X/100)*goldCoin;
    let a1 = goldCoin-a;
    let b = (Y/100)*a1;
    let otherShare = (goldCoin - (a+b))/3;
    return otherShare;  
}