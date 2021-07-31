const contactController = {}; // se crea esta constante para que luego pueda ser exportada
const contactModel = require("../models/contact"); // traemos el modelo para poder hacer consultas a la BD


contactController.getAllContacts = async(req, res) => { // las peticiones se deben hacer de manera async / await
    const allContacts = await contactModel.find();
    res.json(allContacts);

}

contactController.getContact = function(req, res) {
    res.json({
        status: "Just one contact"
    });
}

contactController.addContact = function() {

}

contactController.editContact = function() {

}

contactController.deleteContact = function() {

}

module.exports = contactController;