

// const fs = require('fs');


// var stream = fs.createWriteStream(__dirname+"/JSONfiles/roomsNames_10M.json", {flags:'a'});
// // stream.write(`roomNames = `);
// stream.write(JSON.stringify(getWords()));
// // stream.end(`;\nmodule.exports = roomNames;`)
// stream.end();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var stream = fs.createWriteStream("../jsonHelpers/test.js", {flags:'a'});
// [...Array(10000)].forEach( function (item,index) {
//     stream.write(index + "\n");
// });
// stream.end();



//THIS IS MY FILE
// //generate array
// //write JSON.stringify(array) to the file output

// const generateCSV = function(input_i, input_j, input_num) {
//   let num = 1;
//   while(num <= 100) {
//     for (let j = 0; j < words.length; j++) {
//       for (let i = 93781; i < 93818; i++) {
//         let room = createRoom();
//         console.log(`${words[j]}_${words[i]},`);
//         num++;
//       }
//     }
//   }//while
// }


// // //start processing
// // output.write('[');
// // //loop through your pages, however you're doing that
// // while (more_data_to_read()) {
// //     //create "operation" object
// //     var operation = get_operation_object();
// //     output.write(JSON.stringify(operation, null, 2));
// //     if (!is_last_page()) {
// //         //write out comma to separate operation objects within array
// //         output.write(',');
// //     }
// // }
// // //all done, close the json array
// // output.write(']');


// // Write the data to the supplied writable stream one million times.
// // Be attentive to back-pressure.
// function write10MillionRoomNames(writer, data, encoding, callback) {
//   let i = 1000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// }

