// const rand_skewed_distribution = (min, max, p) => Math.floor(min + (max - min) * Math.pow(Math.random(), p));
// let count = 1000000;
// console.log('count', count);
// let sum = 0;
// let p0_10 = 0;
// let p10_20 = 0;
// let p20_30 = 0;
// let p30_40 = 0;
// let p40_50 = 0;
// let p50_60 = 0;
// let p60_70 = 0;
// let p70_80 = 0;
// let p80_90 = 0;
// let p90_95 = 0;
// let p95_975 = 0;
// let p975_100 = 0;

// for (let i = 0; i < count; i += 1) {
//   let rand = rand_skewed_distribution(0, 10000000, .03);
//   sum += rand;
//   if(rand < 1000000) { p0_10++ }
//   else if(rand < 2000000) { p10_20++ }
//   else if(rand < 3000000) { p20_30++ }
//   else if(rand < 4000000) { p30_40++ }
//   else if(rand < 5000000) { p40_50++ }
//   else if(rand < 6000000) { p50_60++ }
//   else if(rand < 7000000) { p60_70++ }
//   else if(rand < 8000000) { p70_80++ }
//   else if(rand < 9000000) { p80_90++ }
//   else if(rand < 9500000) { p90_95++ }
//   else if(rand < 9750000) { p95_975++ }
//   else if(rand < 10000000) { p975_100++ }
// }

// console.log('Average', sum/count);

// console.log("\nDistribution - count");
// console.log("0_10", p0_10);
// console.log("10_20", p10_20);
// console.log("20_30", p20_30);
// console.log("30_40", p30_40);
// console.log("40_50", p40_50);
// console.log("50_60", p50_60);
// console.log("60_70", p60_70);
// console.log("70_80", p70_80);
// console.log("80_90", p80_90);
// console.log("90_95", p90_95);
// console.log("95_975", p95_975);
// console.log("975_100", p975_100);

// console.log("\nDistribution - percentage");
// console.log("0_10. %", (p0_10 / count) * 100);
// console.log("10_20  %", (p10_20 / count) * 100);
// console.log("20_30  %", (p20_30 / count) * 100);
// console.log("30_40  %", (p30_40 / count) * 100);
// console.log("40_50  %", (p40_50 / count) * 100);
// console.log("50_60  %", (p50_60 / count) * 100);
// console.log("60_70  %", (p60_70 / count) * 100);
// console.log("70_80  %", (p70_80 / count) * 100);
// console.log("80_90.  %", (p80_90 / count) * 100);
// console.log("90_95  %", (p90_95 / count) * 100);
// console.log("95_975  %", (p95_975 / count) * 100);
// console.log("975_100  %", (p975_100 / count) * 100);


//NOTES
// P = 1485
// Average 8707546.746745

// Distribution - count
// 0_10 0
// 10_20 19
// 20_30 289
// 30_40 1856
// 40_50 7178
// 50_60 22588
// 60_70 58353
// 70_80 132256
// 80_90 268955
// 90_100 508506

// Distribution - percentage
// 0_10. % 0
// 10_20  % 0.0019000000000000002
// 20_30  % 0.0289
// 30_40  % 0.1856
// 40_50  % 0.7178
// 50_60  % 2.2588
// 60_70  % 5.8353
// 70_80  % 13.225600000000002
// 80_90.  % 26.8955
// 90_100  % 50.8506

///////////////
// count 1000000000
// Average 9708720.788498366

// Distribution - count
// 0_10 0
// 10_20 0
// 20_30 0
// 30_40 0
// 40_50 0
// 50_60 38
// 60_70 6751
// 70_80 581646
// 80_90 29261585
// 90_95 151079995
// 95_975 249096768
// 975_100 569973217

// Distribution - percentage
// 0_10. % 0
// 10_20  % 0
// 20_30  % 0
// 30_40  % 0
// 40_50  % 0
// 50_60  % 0.0000038000000000000005
// 60_70  % 0.0006751
// 70_80  % 0.058164600000000004
// 80_90.  % 2.9261585
// 90_95  % 15.1079995
// 95_975  % 24.9096768
// 975_100  % 56.9973217


///////////////

// const rand_skewed_distribution = (min, max, p) => Math.floor(min + (max - min) * Math.pow(Math.random(), p));
// let count = 10000000;
// let p = .095;

// console.log('p, count, hits, %');

// for (p; p <= .2; p += .005) {
//   var obj = {};
//   var redisPropCount = 0;
//   var redisCount = 0;

//   for (let i = 0; i < count; i += 1) {
//     let rand = rand_skewed_distribution(0, 10000000, p);
//       if(obj[rand] !== undefined) {
//         obj[rand] = obj[rand] + 1;
//       } else {
//         obj[rand] = 0;
//       }
//   }

//   for(var prop in obj) {
//     if (obj[prop] > 0) {
//       redisPropCount++;
//       redisCount += (obj[prop]);
//     }
//   }


//   // console.log('final redis count', redisCount);
//   // console.log('redis prop count', redisPropCount);
//   console.log(p + 'p, ', redisPropCount + ' count, ', redisCount + ' hits, ', (redisCount/count * 100) + '%')
// }

//  value, room count, room hits, % hits
// 0.005,  241876 count,  9709194 hits,  97.09194%
// 0.010,  412994 count,  9490922 hits,  94.90922%
// 0.015,  558502 count,  9300088 hits,  93.00088%
// 0.020,  686533 count,  9127607 hits,  91.27607%
// 0.025,  801176 count,  8968655 hits,  89.68655%
// 0.030,  907026 count,  8820186 hits,  88.20186%
// 0.035,  1003932 count,  8681363 hits,  86.81363%
// 0.040,  1095156 count,  8548507 hits,  85.48507%
// 0.045,  1179237 count,  8423439 hits,  84.23439%
// 0.050,  1258188 count,  8304972 hits,  83.049721%
// 0.055,  1333491 count,  8189900 hits,  81.899%
// 0.060,  1404171 count,  8080307 hits,  80.80307%
// 0.065,  1469838 count,  7975964 hits,  79.75964%
// 0.070,  1534897 count,  7873209 hits,  78.73209%
// 0.075,  1594682 count,  7775182 hits,  77.751821%
// 0.080,  1651613 count,  7680765 hits,  76.807651%
// 0.085,  1705321 count,  7589677 hits,  75.89677%
// 0.090,  1757147 count,  7500728 hits,  75.00728%
// 0.095,  1806542 count,  7415511 hits,  74.155111%
// 0.100,  1853646 count,  7331828 hits,  73.31828%
// 0.105,  1898182 count,  7251714 hits,  72.51714%
// 0.110,  1940911 count,  7173285 hits,  71.73285%
// 0.115,  1982018 count,  7097378 hits,  70.97379%
// 0.120,  2020034 count,  7022264 hits,  70.22264%
// 0.125,  2056553 count,  6949933 hits,  69.49933%
// 0.130,  2092225 count,  6880880 hits,  68.8088%
// 0.135,  2126280 count,  6811978 hits,  68.119%
// 0.140,  2158021 count,  6744224 hits,  67.44224%
// 0.145,  2189356 count,  6678539 hits,  66.78539%
// 0.150,  2219302 count,  6617404 hits,  66.17404%
// 0.155,  2245762 count,  6554210 hits,  65.5421%
// 0.160,  2272905 count,  6494316 hits,  64.94316%
// 0.165,  2298366 count,  6435197 hits,  64.351901%
// 0.170,  2321318 count,  6378903 hits,  63.78903004%
// 0.175,  2345506 count,  6320892 hits,  63.20892%
// 0.180,  2366575 count,  6265493 hits,  62.65493%
// 0.185,  2387273 count,  6212589 hits,  62.12589%
// 0.190,  2407583 count,  6159608 hits,  61.59608%
// 0.195,  2424812 count,  6109377 hits,  61.0937706%

///////////////





const siege = require("siege");
let sieger = siege().on(3003);

const randomNumbers = [];
const rand_skewed_distribution = (min, max, p) => Math.floor(min + (max - min) * Math.pow(Math.random(), p));
let count = 100000;

for (let i = 0; i < count; i += 1) {
  randomNumbers.push(rand_skewed_distribution(0, 10000000, .125));
}
for (let i = 0; i < randomNumbers.length; i += 1) {
  sieger = sieger.for(1).times.get(`/api/rooms/${randomNumbers[i]}`);
}

sieger.attack();


