import type { Product } from "@/entities/goods";
import type { ProductCategory } from "@/entities/goods/interfaces/product-category.interface.ts";

const allId = crypto.randomUUID();
const electronicId = crypto.randomUUID();
const medicId = crypto.randomUUID();
const funId = crypto.randomUUID();
const etcId = crypto.randomUUID();

export const ProductCategoriesMock: ProductCategory[] = [
	{
		id: allId,
		text: "ВСЕ ТОВАРЫ 000000000000000000000000000000000000000000000000000",
		icon: "coin",
	},
	{
		id: electronicId,
		text: "ЭЛЕКТРОНИКА",
		icon: "plus",
	},
	{
		id: medicId,
		text: "МЕДИКАМЕНТЫ",
		icon: "cross",
	},
	{
		id: funId,
		text: "РАЗВЛЕЧЕНИЯ",
		icon: "coin",
	},
	{
		id: etcId,
		text: "ПРОЧЕЕ",
		icon: "coin",
	},
];
export const ProductsMock: Product[] = [
	{
		id: crypto.randomUUID(),
		categoryId: [etcId, allId],
		price: 1800,
		img: "/flower.png",
		name: "Букет цветов",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [medicId, allId],
		price: 800,
		img: "/apteka.png",
		name: "Аптечка",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [electronicId, allId],
		price: 800,
		img: "/sim.png",
		name: "Сим-карта",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [electronicId, allId],
		price: 800,
		img: "/phone.png",
		name: "Смартфон",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [etcId, allId],
		price: 800,
		img: "/balaclava.png",
		name: "Балаклава",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [funId, allId],
		price: 800,
		img: "/loto.png",
		name: "Лотерейный билет",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [etcId, allId],
		price: 800,
		img: "/watch.png",
		name: "Часы Kleynod",
	},
	{
		id: crypto.randomUUID(),
		categoryId: [electronicId, allId],
		price: 800,
		img: "/smart-watch.png",
		name: "Apple Watch",
	},
];
export const MessageMoneyModalMock: string =
	"Описание — это тип речи, в котором передаётся образ предмета, человека, явления или природы через его признаки, свойства и качества. Цель описания — создать наглядное представление о предмете речи, показать его индивидуальные и типичные черты";
export const MessageCardModalMock: string =
	"Описание — это тип речи, в котором передаётся образ предмета, человека, явления или природы через его признаки, свойства и качества. Цель описания — создать наглядное представление о предмете речи, показать его индивидуальные и типичные черты";
