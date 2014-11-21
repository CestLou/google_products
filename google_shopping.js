var data = require("./products.json")

// // Write your solutions below

//~~~first problem~~~
for (var key in data["items"]){
	if (data ['items'] [key].kind === "shopping#product") {
		console.log(data['items'] [key].product.title);
		itemCount++
	}
}
console.log(itemCount);



//~~~second problem~~~
var backorderCount=0;
for (var key in data['items']) {
	if (data['items'][key].product.inventories[0].availability === "backorder") {
	console.log(data['items'] [key].product.title);
	backorderCount++;
	}
}
console.log(backorderCount);


// //~~~third problem~~~
var imagesCount=0;
for (var key in data['items']) {
	if (data['items'][key].product.images.length > 1){
		console.log(data['items'] [key].product.title);
		imagesCount++;
	}
}
console.log("Number of products with mult images: " + imagesCount);

//~~~fourth problem~~~
var canonBrand=0;
for (var key in data['items']){
	if (data['items'][key].product.brand === "Canon") {
		console.log(data['items'][key].product.title);
		canonBrand++;
	}
}
console.log('Number of Canon cameras: ' + canonBrand);


//~~~fifth problem~~~
var canonebayCount = 0;
for (var key in data['items']) {
	if (data['items'][key].product.brand === "Canon" &&
	data['items'][key].product.author.name.indexOf("eBay") > -1) {
	console.log(data['items'][key].product.title);
	canonebayCount++;
	} 
}
console.log('Number of Canon cameras on eBay: ' + canonebayCount);

//~~~sixth problem~~~
var productInfo = 0;
for (var key in data['items']) {
	console.log("Brand: " + data['items'][key].product.brand + "\n" +
				"Price: " + data['items'][key].product.inventories[0].price + "\n" +
				"Image: " + data['items'][key].product.images[0].link + "\n\n");
}















