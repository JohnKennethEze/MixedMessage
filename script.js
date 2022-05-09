// Function to generate a whole number..
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}


// A varible with an Arrey..
const country = ['Germany', 'USA', 'France', 'Russia', 'Canada', 'Italy', 'New York', 'Urkaine', 'Japen', 'China']
const product = ['Nokia', 'Samsung', 'Tecno', 'Apple', 'Oppo', 'Infinix', 'Itel', 'HTC', 'Blackberry', 'Motorolla']
const school = ['MIT', 'Oxford', 'Havard', 'California', 'Princetom', 'Cambridge', 'FUTMinna', 'Convenant', 'Landmark', 'ABU-Zaria']


const countries = country[generateRandomNumber(10)];
const phone = product[generateRandomNumber(10)];
const learn = school[generateRandomNumber(10)];

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log(`My dream country to visit and live is: ${countries}!`);
console.log(`I love using: ${phone} product!`);
console.log(`My dream school to study for my masters is: ${learn}!`);
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');







