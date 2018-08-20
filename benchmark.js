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
///////////////

const siege = require("siege");
let sieger = siege().on(3003);

const randomNumbers = [];
const rand_skewed_distribution = (min, max, p) => Math.floor(min + (max - min) * Math.pow(Math.random(), p));
let count = 100000;

for (let i = 0; i < count; i += 1) {
  randomNumbers.push(rand_skewed_distribution(0, 10000000, .03));
}
for (let i = 0; i < randomNumbers.length; i += 1) {
  sieger = sieger.for(1).times.get(`/api/rooms/${randomNumbers[i]}`);
}

sieger.attack();









