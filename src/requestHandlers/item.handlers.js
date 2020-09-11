import models from "../models";

const {Item} = models;

export async function addNewItem(req, res, next){
        const {name} = req.body;
        const newItem = await Item.create({name})
        res.send(newItem)
}

export async function getAllItems(req, res, next){
        const items = await Item.findAll();
        res.send(items)
}

export async function getItemById(req, res, next){
    const {id} = req.params;
    const item = await Item.findByPk(id)
    res.send(item)
}
export async function updateItemById(req, res, next){
    const {id} = req.params;
    const {name} = req.body;
    // удаляем пля со значение undefined;
    const newItemFields = JSON.parse(JSON.stringify({name}))

    await Item.update(newItemFields, {where: {id}});
    res.send("Item updated");
}
export async function deleteItemById(req, res, next){
    const {id} = req.params;

    const result = await Item.destroy({where: {id}});

    res.send("item deleted")
}