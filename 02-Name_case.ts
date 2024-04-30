// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}

// Person's name
const personName: string = "Sir syed Ahmed khan";

// Step one: show in to Lower case 
const lowerCase: string = personName.toLowerCase();
console.log("Lower case:", lowerCase);

// Step two: show in to Upper case
const upperCase: string = personName.toUpperCase();
console.log("Upper case:", upperCase);

// Step three: show in title case
const titleCase: string = toTitleCase(personName);
console.log("Title case:", titleCase);
