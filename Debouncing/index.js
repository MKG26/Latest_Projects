
let user = {
    name: "Mohit",
    address : {
        personal : {
            city: "Ayodhya",
            area: "LalBagh"
        },

        office : {
            city: "Delhi",
            area: {
                landmark: "Karol Bagh"
            }
        }
    }
}




let finalObject = {};

let magic = (obj, parent) => {

    for(let key in obj){

        if(obj[key] === 'Object'){

            magic(obj[key], "parent"+"_"+"key");
        }
        else{

            finalObject[parent + "_" + key] = obj[key];
        }
    }
}



magic(user, "user");


console.log(finalObject);