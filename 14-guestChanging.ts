let guestList: Array<string> = [
    'sir syed ahmed khan',
    'sir Qasim ali shah',
    'sir zia khan',
];

// Step one: print the name of the person who can't make it
let guestWhoCantMakeIt: string = "sir zia khan";
console.log(`${guestWhoCantMakeIt}, can't make it to dinner`);

// Step two: Replace the guest who can't make it
let newGuest: string = "sad hashmani";
let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Step three: Print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
