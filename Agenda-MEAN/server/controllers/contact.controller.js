const contactController = {}; // se crea esta constante para que luego pueda ser exportada
const contactModel = require("../models/contact"); // traemos el modelo para poder hacer consultas a la BD

contactController.addContact = async(req, res) => {
    const contact = new contactModel({
        group: req.body.group,
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone
    });
    //console.log(contact);
    await contact.save();
    res.json({ status: "saved" });
};

contactController.getAllContacts = async(req, res) => { // las peticiones se deben hacer de manera async / await
    const allContacts = await contactModel.find();
    res.json(allContacts);
}

contactController.getContact = async(req, res) => {
    const contact = await contactModel.findById(req.params.id);
    res.json(contact);
};

contactController.editContact = async(req, res) => {
    const { id } = req.params;
    const contact = {
        name: req.body.name,
        group: req.body.group,
        email: req.body.email,
        telephone: req.body.telephone
    }
    await contactModel.findByIdAndUpdate(req.params.id, { $set: contact }, { new: true }); // {new: true} --> si no encuentra el id buscado, crea un nuevo objeto con los datos pasados (contact)
    res.json({
        status: "updated"
    });
};

contactController.deleteContact = async(req, res) => {
    await contactModel.findByIdAndRemove(req.params.id);
    res.json({ status: "deleted" });
};

module.exports = contactController;