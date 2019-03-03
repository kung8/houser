module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        }).catch(
            err => {
                res.sendStatus(404)
            })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode, image, desiredMonthlyRent:desired_rent, monthlyMortgageAmount:monthly_morgage_amount } = req.body;
        db.add_house({name, address, city, state, zipcode, image, desired_rent, monthly_morgage_amount}).then(houses => {
            console.log(houses)
            res.status(200).send(houses)
        })
        .catch(err => {
            res.send('Not Added')
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house([id]).then(houses => {
            // console.log("all good!")
            res.status(200).send(houses)
        })
    }
}