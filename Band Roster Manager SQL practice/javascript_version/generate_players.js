const fs = require('fs');
const faker = require('faker');
const { strict } = require('assert');

var person = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age:  Math.floor(Math.random() * (20 - 17) + 17),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
}



// console.log()
// console.log(person)



let sqliteQuery = ''



for(i=0; i<100; i++){
    var person = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age:  Math.floor(Math.random() * (20 - 17) + 17),
        phoneNumber: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        sectionType: Math.floor(Math.random() * 11 + 1),
        leadershipStatus: 1,
    }
    // console.log(person)
    // console.log(Math.floor(Math.random() * 11 + 1))
    let queryInsert = "INSERT INTO players(first_name, last_name, age, phone_number, email, active, section_type, leadership_type)\n VALUES \n"
    let value = `("${person.firstName}", "${person.lastName}", ${person.age}, "${person.phoneNumber}", "${person.email}", 1, ${person.sectionType}, 0); \n`
    query = queryInsert.concat(value)
    

    // console.log(query)
    // sqliteQuery.concat('query')

    sqliteQuery += query
}




// console.log(sqliteQuery)
// console.log(faker.phone.phoneNumberFormat())
// console.log(queryData)







fs.writeFile('generate_players_queries.txt', sqliteQuery, function (err){
    if (err) return console.log(err);
    console.log('Data saved to text file')
})