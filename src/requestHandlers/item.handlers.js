import models from "../models";
import url from "url"
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
	const {sort, direction, min, max} = url.parse(req.url, true).query;
	let items = await Item.findAll();

	if(sort == "name") items = items.sort();
	if(sort == "price") items = items.sort((a,b)=>a.price-b.price);
	if(min) items = items.filter(i=>i.price>=min);
	if(max) items = items.filter(i=>i.price<=max);
	if(direction) items = items.reverse();

	res.render("pages/items_page.ejs",{items})
}
export async function oneItemPage(req, res, next){
	const {id} = req.params;
	const item = await Item.findByPk(id);
	res.render("pages/one_item_page.ejs", {item});
}
