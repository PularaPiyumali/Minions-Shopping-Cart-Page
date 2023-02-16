let bucket= JSON.parse(localStorage.getItem("store")) || [];

//Adding items to total quantity 

function increment(id) 
{
let selectedItem = id;
let search = bucket.find(bucketFind)
if (search === undefined)
{
   bucket.push({
                id:selectedItem.id,
				item:1,
   }) 
}
else{
search.item+=1;
}

//console.log(selectedItem.id);
//console.log(bucket);

localStorage.setItem("store",JSON.stringify(bucket));
update(selectedItem.id);

function bucketFind(x)
{
 return x.id === selectedItem.id}
};

//Removing items from total quantity

function decrement(id)
{
let selectedItem = id;
let search = bucket.find(bucketFind)

if (search === undefined) return

else if (search.item === 0) return;
else{
search.item-=1;
}
//console.log(selectedItem.id);
//console.log(bucket);


bucket = bucket.filter((x) => x.item !== 0);

localStorage.setItem("store",JSON.stringify(bucket));
update(selectedItem.id); 

function bucketFind(x)
{
 return x.id === selectedItem.id}
 

};

//Update the quantity everytime add or remove items

function update(id)
{
let search = bucket.find(bucketFind)
//console.log(search.item)
document.getElementById(id).innerHTML = search.item;
calculate();

function bucketFind(x)
{
 return x.id === id}

}; 

//Calculate total amount

function calculate ()
{
let cart = document.getElementById("productsAmount");
cart.innerHTML = bucket.map(calculateItems).reduce(calculateItems2);


function calculateItems(y)
{
  return y.item
}

function calculateItems2(x,y)
{
  return x+y
}
 
};

calculate();



