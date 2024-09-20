let nama = "kevin";
let gender = "female";
let gen = 0;

switch(gen){
    case -2:
        if (gender == "male"){
            console.log("kakek")
        }else if (gender == "female"){
            console.log("nenek")
        }else {
            console.log("unidentified")
        }
    break;
    case -1:
        if (gender == "male"){
            console.log("bapak")
        }else if (gender == "female"){
            console.log("ibu")
        }else {
            console.log("orang lain")
        }
    break;
    case 0:
        if (gender == "male"){
            console.log("saya")
        }else {
            (gender == "female")
            console.log("adikku")
        }
    break;
    case 1:
        if (gender == "male"){
            console.log("cahbagus")
        }else {
            (gender == "female")
            console.log("cahayu")
        }
    break;
    case 2:
        if (gender == "male"){
            console.log("cucu(lk)")
        }else {
            (gender == "female")
            console.log("cucu(pr)")
        }
    break;
    default:
        console.log("tidak dikenal")
    break;
}