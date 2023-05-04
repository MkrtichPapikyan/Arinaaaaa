// let num1 = prompt("GRi tivt");
// let num2 = prompt("Gri tiv erku");
// let num3 = prompt("Gri tiv ereq");

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// num3 = parseInt(num3);
// let num = 0;
// for(i=0; i<=0; i++) {
//     if(num1<num2||num1<num3){
//         document.write(num1);
//     }
//     else if(num2<num3||num2<num1) {
//         document.write(num2);
//     }
//     else {
//         document.write(num3)
//     }
// }

// let eat = prompt("inch gin@ kuzes imanas? Pica, apur, paxpaxak te surch?"); 
// switch(eat) {
//     case "pica":
//         x="Pican 200 HH dram";
//         document.write(x);
//         brake;
//         case "apur":
//             x="Apur 150 HH dram";
//             document.write(x);
//             brake;
//             case "paxpaxak":
//                 x="PaxpaxaK@ 100 HH dram";
//                 document.write(x);
//                 brake;
//                 case "surch":
//                     x="Surch@ 50 HH dram";
//                     document.write(x);
//                     brake;
//                     default:
//                         x="Etenc ban chka HH taracqum";
//                         document.write(x);
// }

let a = prompt("a");
let b = prompt("b");
let c = prompt("c");
let d = 0;
let x1 = 0, x2 = 0;
var lineBreak1 = document.createElement("br");


a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

d = Math.pow(b,2)-4*a*c
if(d>0&&Math.sqrt(d)%2==0) {
        d = Math.sqrt(d);
        x1 = -b+d/2*a;
        x2 = -b-d/2*a;
        document.write("x1="+x1);
        document.body.appendChild(lineBreak1);
        document.write("x2="+x2);
}
else {
    document.write("chi lucvum");
}


// var tari = prompt("Gri tvakan");
// tari = parseInt(tari);
// switch (tari) {
//     case 1988:
//         x="Arcaxi azatamart ev Spitaki erkrasharj";
//         document.write(x);
//         break;
//         case 1991:
//         x="HH ankaxutyun";
//         document.write(x);
//         break;
//         case 1992:
//             x="Shushii azatagrum";
//             document.write(x);
//             break;
//             default:
//                 x="voch mi mshanakalic ban";
//                 document.write(x);
// }