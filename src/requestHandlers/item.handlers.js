import models from "../models";
import url from "url";
import {Op} from "sequelize";
import {sequelize} from "../models";

const {Item} = models;

export async function addNewItem(req, res, next){
	const {name, price, description} = req.body;
	const newItem = await Item.create({name, price, description});
	res.redirect("items/items_page");
}

export async function getAllItems(req, res, next){
	const items = await Item.findAll();
	res.send(items);
}

export async function getItemById(req, res, next){
	const {id} = req.params;
	const item = await Item.findByPk(id);
	res.send(item);
}
export async function updateItemById(req, res, next){
	const {id} = req.params;
	const {name} = req.body;
	// удаляем поля со значение undefined;
	const newItemFields = JSON.parse(JSON.stringify({name}));

	await Item.update(newItemFields, {where: {id}});
	res.send("Item updated");
}
export async function deleteItemById(req, res, next){
	const {id} = req.params;

	const result = await Item.destroy({where: {id}});

	res.send("item deleted");
}

export async function itemsPage(req, res, next){
	let {sort, direction, min, max} = url.parse(req.url, true).query;
	if(!sort){sort="name"}
	if(!direction){direction="ASC"}
	if(!min){min=0}
	if(!max){max=Number.MAX_SAFE_INTEGER}

	let items = await sequelize.query(`SELECT * FROM items AS item WHERE (item.price >= ${min} AND item.price <= ${max}) 
	ORDER BY item.${sort} ${direction}`);
	items = items[0]

	res.render("pages/items_page.ejs",{items});
}
export async function oneItemPage(req, res, next){
	const {id} = req.params;
	const item = await Item.findByPk(id);
	res.render("pages/one_item_page.ejs", {item});
}
