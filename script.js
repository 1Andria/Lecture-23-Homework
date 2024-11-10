// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.
let mas = [1, 2, 3, 4, 7];

let res = mas.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(res);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.
let ms = [1, 2, 10, 4, 5];
let re = ms.reduce((acc, cur) => {
  if (acc < cur) {
    return (acc = cur);
  } else {
    return acc;
  }
}, 0);
console.log(re);

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

let str = ["dsad", "dsasd", "dsaasd"];

let gaerti = str.reduce((acc, cur) => {
  return `${acc} ${cur}`;
}, "");
console.log(gaerti.trim());

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.
let gamr = [1, 2, 3];

let gam = gamr.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(gam);

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.

let sxv = [10, 5, 4];

let sxvo = sxv.reduce((acc, cur) => {
  return acc - cur;
});
console.log(sxvo);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.

let orm = [1, 2, 3, 4, 5];

let gaorm = orm.map((ind) => {
  return ind * 2;
});
console.log(gaorm);

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

let stri = ["DSA", "DAS", "QWE"];

let pat = stri.map((ind) => {
  return ind.toLowerCase();
});
console.log(pat);

// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.
let pi = document.getElementById("irstP");
let pii = document.getElementById("econdP");
let piii = document.getElementById("hirdP");
let msive = [pi, pii, piii];

let newm = msive.map((ind) => {
  ind.textContent = "new_text";
});
// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

let m = [2, 4, 6];
let sm = m.map((ind) => {
  return ind * ind;
});
console.log(sm);

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.

let p = document.getElementById("firstP");
let pp = document.getElementById("secondP");
let ppp = document.getElementById("thirdP");
let sive = [p, pp, ppp];
sive.forEach((ind) => {
  ind.textContent = "text";
});

// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.

let qula = [5, 10, 15];

qula.forEach((ind) => {
  console.log(ind + 5);
});

// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.
let nums = [1, 9, 3, 4, 5];
function reverse(ind) {
  let mass = [];
  for (let i = ind.length - 1; i >= 0; i--) {
    mass.push(ind[i]);
  }
  return mass;
}

console.log(reverse(nums));

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.
let P = document.getElementById("FirstP");
let PP = document.getElementById("SecondP");
let PPP = document.getElementById("ThirdP");

let massi = [P, PP, PPP];

for (let i = 0; i < massi.length; i++) {
  massi[i].textContent = "new";
}

// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
let numm = [1, 2, 3, 4, 5];

for (let i = 0; i < numm.length; i++) {
  console.log(`${numm[i]}-ის გამრავლების ცხრილი`);

  for (let j = 1; j < 11; j++) {
    console.log(`${numm[i]} * ${j} = ` + numm[i] * j);
  }
}

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

let k = [1, 20, 30, 5];

function filtered(ricxvi) {
  return ricxvi.filter((ind) => {
    return ind >= 10;
  });
}

console.log(filtered(k));

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.
let pt = document.getElementById("ragac");
let h = document.getElementById("ragaca");
let hh = document.getElementById("ragacaa");

let masi = [pt, h, hh];

let filtreed = masi.filter((ind) => {
  return ind.classList.contains("css");
});
console.log(filtreed);
