//TypeScript Node.js Exercises (Checking Usernames) 
let currentUser: string[]=['SaBahat','ArBish','FatiMaZehra','FaHeem'];

let newUser: string[]=['Sonu sharma','SabaHat','Quaid','FaHeem','Bilal'] ;
newUser.forEach(newUsername => {
    
    let Lowercase:string= newUsername.toLowerCase();
if(currentUser.map(C_User=> C_User.toLowerCase().includes(Lowercase))){
    console.log(`The userName ${newUsername}is not available. Please write a different username`);

}
else{
    console.log(`'The user${newUser} is Avaiable'`);
    
}
});  