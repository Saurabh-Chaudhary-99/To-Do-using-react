const todoModel = require("./model");

module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find();
    res.send(todo);
}

module.exports.saveTodo = (req, res) => {
    const { text } = req.body;

    todoModel
        .create({ text })
        .then((data) =>{ 
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteTodo = (req, res) => {
    const { _id } = req.body;
    todoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Delete Done"))
        .catch((err) => console.log(err));
}

module.exports.updateTodo = (req, res) => {
    const { _id, text } = req.body;

    todoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Update Done"))
        .catch((err) => console.log(err));
}