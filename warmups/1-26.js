const userData = require('./1-26-data');

/**  
*Given users, return an array of each of the users' full name title-cased
*@param {Object[]} = users array
*@return {Object[]} = new array with all of the users' full name, title-cased

example: returns ['Firstname Lastname', 'Firstname Lastname']
*/

// Helper function
function capitalizeName(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Main function
function getUserFullName(usersArr) {
    // let usersFullName = [];

    // Regular for loop
    // for (let i = 0; i < usersArr.length; i++) {
    //     const { firstName, lastName } = usersArr[i];
    //     // Use the helper function to title-case the string
    //     let firstNameCaps = capitalizeName(firstName);
    //     let lastNameCaps = capitalizeName(lastName)
    //     let fullName = `${firstNameCaps} ${lastNameCaps}`;
    //     usersFullName.push(fullName);
    // }

    // ForEach
    // usersArr.forEach(userObj => {
    //     const { firstName, lastName } = userObj;
    //     // Use the helper function to title-case the string
    //     let firstNameCaps = capitalizeName(firstName);
    //     let lastNameCaps = capitalizeName(lastName)
    //     let fullName = `${firstNameCaps} ${lastNameCaps}`;
    //     usersFullName.push(fullName);
    // })

    // Map
    // return usersArr.map(userObj => {

    //     const { firstName, lastName } = userObj;

    //     // Use the helper function to title-case the string
    //     let firstNameCaps = capitalizeName(firstName);
    //     let lastNameCaps = capitalizeName(lastName)
    //     let fullNameCaps = `${firstNameCaps} ${lastNameCaps}`;

    //     return fullNameCaps;
    // })

    // Reduce
    return usersArr.reduce((fullNamesArr, currUserObj) => {
        const { firstName, lastName } = currUserObj;

        // Use the helper function to title-case the string
        let firstNameCaps = capitalizeName(firstName);
        let lastNameCaps = capitalizeName(lastName)
        let fullNameCaps = `${firstNameCaps} ${lastNameCaps}`;
        // fullNamesArr.push(fullNameCaps);

        // return fullNamesArr
        
        // return [...fullNamesArr, fullNameCaps]
        return fullNamesArr.concat(fullNameCaps)
    }, [])

    // return usersFullName;

}


console.log(getUserFullName(userData));