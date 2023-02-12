function isOnTestForBangla(s){
    return /^[\u0980-\u09FF]/.test(s);
}
function isOnResearchForBangla(s){
    for (let i = 0; i < s.length; i++) {
        if (isOnTestForBangla(s[i])){
            //console.log(s[i])
        }
        if(s[i]===" "){
            //console.log(s[i])
        }
        else if(/^[\u0980-\u09FF]/.test(s[i])===false){
            return false;
        }
    }
    return true;
}

//console.log(isOnResearchForBangla("বাংলা ভাষায়"));

module.exports = {isOnTestForBangla,isOnResearchForBangla}
