let HtmlElement = document.querySelector(".box");

const UserFirsName = prompt("შეიყვანეთ სახელი : ");
const UserLastName = prompt("შეიყვანეთ გვარი : ");
const UserData = prompt("შეიყვანეთ დაბადების წელი : ");
const UserLocation = prompt("შეიყვანეთ საცხოვრებელი ადგილი : ");

const array = [UserFirsName, UserLastName, UserData, UserLocation];

const info = `გმარჯობა ${array[0]} ${array[1]},
 მიხარია რომ უკვე ${2023 - array[2]} წლის ხართ და
 ${array[3]} ცხოვრობთ`;

HtmlElement.textContent = info;

console.log(info);
