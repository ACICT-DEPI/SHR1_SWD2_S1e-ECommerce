const PRODUCTS = [

    {id:1, name: 'copy of slime laptop', price: 20000.00 , postImage:require("./components/imgs/img/9.jpg"), new: true },
    {id:2, name: 'slime laptop', price: 20000.00 , postImage:require("./components/imgs/img/10.jpg"), new: true },
    {id:3, name: 'lenovo gaming 3', price: 6999.00 ,postImage:require("./components/imgs/img/15.jpg"), new: false },
    {id:4, name: 'mac', price: 40000.00 ,oldPrice:36000.00 ,postImage:require("./components/imgs/img/14.jpg") , discount: '10%' },
    {id:5, name: 'hp gaming laptop', price: 50000.00, postImage:require("./components/imgs/img/16.jpg"), discount: false },
    {id:6, name: 'Asus', price: 15000.00 , oldPrice: 30000.00 , discount: '50%' , postImage:require("./components/imgs/img/6.jpg")},
    {id:9, name: 'laptop hp and headphone from hp', price: 40000.00 ,  postImage:require("./components/imgs/img/13.jpg"), discount: false },
    {id:10, name: 'laptop, headphone and phone', price: 10000.00 , postImage:require("./components/imgs/img/1.jpg") },
    {id:11, name: 'pc gaming', price: 32000.00 , oldPrice: 40000.00, discount: '10%', postImage:require("./components/imgs/img/3.jpg") },
    {id:12, name: 'Keyboard', price: 150.00 , image: 'image3.jpg', bestSale: true ,postImage:require("./components/imgs/img/5.jpg") },
    {id:13, name: 'Gaming Equipment', price: 50000.00 , postImage:require("./components/imgs/img/8.jpg") },
    {id:19, name: 'Geometric Phone Case', price: 150.00 , oldPrice: '20.00 EGP', discount: '25%', postImage:require("./components/imgs/img/4.jpg") },
    {id:20, name: 'tablet with tablet case', price: 15000.00 , postImage:require("./components/imgs/img/7.jpg") },
    { id: 21, name: 'Screen', price: 8000.00, oldPrice: 10000.00 , discount: '-20%', postImage:require("./components/imgs/img/2.jpg") },
    { id: 22, name: 'Acer', price: 63000.00, oldPrice: 70000.00 , discount: '-10%', postImage:require("./components/imgs/img/11.jpg") },
    {id:23, name: 'dell', price: 20000.00 , postImage:require("./components/imgs/img/17.jpg"), new: true },
    {id:24, name: 'mac os ', price: 200000.00 , postImage:require("./components/imgs/img/19.jpg"), new: true },

	{
		id: 25,
		name: 'Bluetooth & Wireless Over-Ear Headphones (Black)',discount:"-50%",oldPrice:"2000,00.00",
		price: 100000.00 ,
		postImage:require('../src/components/imgs/img/27.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 26,
		name: 'Apple iPhone 128GB',
		price: 600000.00 ,
		postImage:require('./components/imgs/img/29.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 27,
		name: 'Running Shoe Red & White',
		price: 100 ,
		postImage:require('./components/imgs/img/23.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 28,
		name: 'Apple iPhone Blue 64GB',
		price: 1100 ,
		postImage:require('./components/imgs/img/24.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 29,
		name: 'Bluetooth Over-Ear Headphones (White)',
		price: 2000 ,
		postImage:require('./components/imgs/img/25.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 30,
		name: 'Logitech Gamepad White for PC/PS3',
		price: 5000 ,
		postImage:require('./components/imgs/img/30.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 31,
		name: 'Premium Smart Watch (Black)',
		price: 3000  ,
		postImage:require('./components/imgs/img/30.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 32,
		name: 'Multicolor Modern Shoe for Her',
		price: 3000 ,
		postImage:require('./components/imgs/img/28.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 33,
		name: 'Apple iPhone (Brand New)',
		price: 50000.00 ,
		postImage:require('./components/imgs/img/29.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 34,
		name: 'Smart Watch with Latest Android OS',
		price: 700000.00 ,
		postImage:require('./components/imgs/img/30.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 35,
		name: 'Modern & Original Eye Glasses',
		price: 200 ,
		postImage:require('./components/imgs/img/31.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 36,
		name: 'Nikon Camera (Slightly Used) 750',
		price: 6600 ,
		postImage:require('./components/imgs/img/32.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 37,
		name: 'Red & Black Ganming Mouse for PC',
		price: 4400 ,
		postImage:require('./components/imgs/img/33.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 38,
		name: 'Multi Purpose College Bag Backpack',
		price: 7700 ,
		postImage:require('./components/imgs/img/34.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 39,
		name: 'White & Black Watch Concept',
		price: 55000 ,
		postImage:require('./components/imgs/img/35.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
];

export default PRODUCTS;
