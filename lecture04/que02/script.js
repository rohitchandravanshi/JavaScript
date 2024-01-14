//Q. For a given prices of 5 items -> [250, 230, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after appling offer.

let items = [250, 230, 900, 50]

for(i=0; i<items.length; i++){
    items[i] = ((items[i]*90)/100)
}
console.log(items);