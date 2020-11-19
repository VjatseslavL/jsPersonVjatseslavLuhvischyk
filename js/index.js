let name = "Vjatseslav";
let age = 18;
let city = "Tallinn";
let variable = true;
let driving = "";
console.log(`Name: ${name}. age: ${age}. city: ${city}`)

if(city = "Tallinn"){
    city = "Vjatseslav elab Tallinnas"
} else {
    city = "Vjatseslav ei ela Tallinnas"
}

if(age >= 18) {
    driving = `${name} is old enough to drive a car.`;
} else {
    driving = `${name} is young.`;
}

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>${driving}</li>
    </ul>
`;

document.body.innerHTML = html;