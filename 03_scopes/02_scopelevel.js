// nested scope
function one(){
    const username = "jayesh"

    function two() {
        const website = "youtube"//variable declaration
        console.log(username);
    }
    //console.log(website)
    two()
}

one()