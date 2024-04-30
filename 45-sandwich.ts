function makesandwich(...iteams: string[]): void {
    console.log("Sandwich summary:");
    if (iteams.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        iteams.forEach((item, i) => {
            console.log(`${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}

// Call the function with different numbers of arguments
makesandwich();
makesandwich('Turkish', 'tomato', 'mayyu', 'Garlic');
makesandwich('Ham', 'Cheese');
makesandwich('Peanut', 'Butter', 'Honey');
