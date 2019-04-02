const donuts = require("../data/data.json");
let myDonuts = [];
// let id = 0;
module.exports = {
    harvestDonuts: (req, res) => {
        res.status(200).send(donuts)
    },
    userAddDonuts: (req, res) => {
        
  
        const {id, name, image_path, description, price, quantity} = req.body
        let alreadyAdded = myDonuts.findIndex((donut) => donut.name === name)
        console.log(alreadyAdded)
        if(alreadyAdded !== - 1){
            console.log(myDonuts[alreadyAdded])
            myDonuts[alreadyAdded].quantity += 1
        }else {
            const newDonuts = {
                id,
                name,
                image_path,
                description,
                price,
                quantity
            };
            myDonuts.push(newDonuts);
        }
        
        res.status(200).send(myDonuts);
    },
    updateDonuts:(req, res) => {},

    donutDelete: (req, res) => {
    
        const {id} = req.params;
        let index = myDonuts.findIndex(donuts => donuts.id === +id)

        if(index !== -1){
            myDonuts.splice(index, 1);
            res.status(200).send(myDonuts)
        }else{
            res.status(404).send("Somebody ate your donut.")
        }
        
    }

};
// const deleteID = req.params.id;
//         messageIndex = messages.findIndex(message => message.id == deleteID);
//         messages.splice(messageIndex,1);
//         res.status(200).send(messages);