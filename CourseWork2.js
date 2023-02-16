let text1 = document.getElementById("text1");
let shoppingCart = document.getElementById("shoppingCart");


let bucket= JSON.parse(localStorage.getItem("store")) || [];



//Generate choosed items to calculate the total bill

function generateItem()
{
    if (bucket.length !== 0)
    {
       return shoppingCart.innerHTML = bucket.map((x) => 
       {
        
        let {id,item}=x;
        let searchItem = shopItem.find((findData) => findData.id === id) || [];
        
        
        return `<div class="itemCart">
        
        <div class="detail">
        

            <div class="crossIcon">
            
               <h4 class="priceButton"> 
                  <p class="cartDescription">${searchItem.des}</p>
                  <p class="cartPrices">Rs. ${searchItem.price}</p>
                </h4>
                <i onclick="removingItems(${id})" class="bi bi-x"></i>
            </div>
            <div class="button">
                <i onclick="decrement(${searchItem.id})" class="bi bi-dash-square"></i>
                    <div id=${searchItem.id} class="quantity">${item}</div>
                <i onclick="increment(${searchItem.id})" class="bi bi-plus-square"></i>
                <h3>Rs. ${item * searchItem.price}</h3>
            </div>
        </div>`
       
       }).join("");
    }
    else
    {
        shoppingCart.innerHTML = '';
        text1.innerHTML = `<h2>Cart is Empty</h2> 
        <a href="index.html"><button class="home">Back</button>
        </a>`;
        
    }
    
};
generateItem();

//For add more items form the quantity

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
generateItem();
localStorage.setItem("store",JSON.stringify(bucket));
update(selectedItem.id);

function bucketFind(x)
{
 return x.id === selectedItem.id}
};

//For remove items from the quantity

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

generateItem();
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
total();

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

//Removing cart cards

function removingItems(id)
{

   let selectItem = id;
   console.log(selectItem.id);
   bucket = bucket.filter((x) => x.id !== selectItem.id);
   generateItem();
   total();
   localStorage.setItem("store",JSON.stringify(bucket));

};

//Clear cart

function clearingCart()
{
    
    bucket = [];
    generateItem();
    localStorage.setItem("store",JSON.stringify(bucket));
    
};

//Calculating total price

function total()
{
    if (bucket.length !== 0) 
    {
        let tot = bucket.map((x) => 
        {
         
         let {id,item}=x;
         let searchItem = shopItem.find((findData) => findData.id === id) || [];
         return item * searchItem.price;
    }).reduce((x,y) => x+y,0);
    
    text1.innerHTML = `<h2>Total Bill : Rs. ${tot}</h2>
    <button onclick="clearingCart()" id="remove" class="remove">Clear Cart</button>
    `;
    
}
    
    else return;
};
total();

//Name validation

function showAndClearField(form)
	{
	if (form.fullName.value === "")
	{
	  alert("Please enter a valid data!");
	  return false;
	}
	else 
	{
	alert ("Your Full Name : " + form.fullName.value);
	return true;
	}
	
};

//Email Validation
    
function validEmail(form)
	{
	if  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.EmailAddresse.value))  
	{
      alert ("Your Email : " + form.EmailAddresse.value);
	  return true;
    }
    
    else 
    {
        alert("Please enter a valid data!")
        return false;
    }
	
	
	
};

//Place the order alert

document.getElementById("order").addEventListener("click", function() 
{
    
        alert("Thank you for your order!");
    
});

//Clear cart alert

document.getElementById("remove").addEventListener("click", function() 
{
    alert("Warning!!! Your cart will be empty");
});
    
    





 


