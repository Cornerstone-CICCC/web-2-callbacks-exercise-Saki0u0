const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  console.log(data1)
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    console.log(data2)

    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      console.log(data3)

      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        console.log(data4)

        const hobbiesArray = JSON.parse(data4);
        const firstHobby = hobbiesArray[0];
        const secondHobby = hobbiesArray[1];

        const sentence = `${data1} ${data2} is ${data3} years old and his hobbies are ${firstHobby} and ${secondHobby}`;
        console.log(sentence);
      })
    })
  })
})



