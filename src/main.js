const menuItemsData = [
  {
    id: 1,
    name: "Mediterranean  Salad",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/bigBurger.png",
    type: "FastFood",
  },
  {
    id: 2,
    name: "Summer Asian Slaw",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/bowl1.png",
    type: "BreakfastDish",
  },
  {
    id: 3,
    name: "Burger",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/bowl2.png",
    type: "BreakfastDish",
  },
  {
    id: 4,
    name: "white sauce pasta",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/bowl3.png",
    type: "BreakfastDish",
  },
  {
    id: 5,
    name: "butterfly pasta",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/bowl4.png",
    type: "BreakfastDish",
  },
  {
    id: 6,
    name: "tooty fruity bowl",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/fruits.png",
    type: "BreakfastDish",
  },
  {
    id: 7,
    name: "granola cereal bowl",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/granola cereal bowl.png",
    type: "BreakfastDish",
  },
  {
    id: 8,
    name: "palm bowl",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-aa-na-tigela-smoothie-aa-palm-bowl-apple-j-goji-berry-5b306ffe7baf07.9992682215299010545066.png",
    type: "Fruit",
  },
  {
    id: 9,
    name: "tigela smoothie",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-aa-na-tigela-smoothie-breakfast-juice-health-s-acai-bowl-5b11d2604db908.6695630315278946243184.png",
    type: "Fruit",
  },
  {
    id: 10,
    name: "breakfast cereal",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-breakfast-cereal-pizza-muesli-meze-vegetarian-cuis-granola-5ac48d852aeb69.1891892315228307251758.png",
    type: "BreakfastDish",
  },
  {
    id: 11,
    name: "cuisine of hawaii",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-cuisine-of-hawaii-l-l-hawaiian-barbecue-shrimp-gam-frozen-chicken-5b1e62f3a9e035.2766282415287180676958.png",
    type: "BreakfastDish",
  },
  {
    id: 12,
    name: "fried chicken",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-fried-chicken-lemon-chicken-chicken-meat-fine-dining-chicken-meat-5a940a1b75aa22.821205431519651355482.png",
    type: "BreakfastDish",
  },
  {
    id: 13,
    name: "greek salad",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-greek-salad-fruit-salad-spinach-salad-muesli-vegetable-salad-5a96f429ce9af3.7299622115198423458463.png",
    type: "Fruit",
  },
  {
    id: 14,
    name: "hamburger",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41.2676743415176192608466.png",
    type: "FastFood",
  },
  {
    id: 15,
    name: "israeli salad",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-israeli-salad-european-cuisine.png",
    type: "BreakfastDish",
  },
  {
    id: 16,
    name: "Pizza Pasta",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/kisspng-italian-cuisine-pizza-pasta-food-plate-healthy-food-5abb864701e2b7.3892346415222390470077.png",
    type: "BreakfastDish",
  },
  {
    id: 17,
    name: "Pizza",
    info: "spicey with garlic and then deep fried to crispy perfection",
    price: 24,
    img: "/images/pizza.png",
    type: "FastFood",
  },
];
const basket = []
console.log(menuItemsData);
const generateShop = () => {
    const shop = document.getElementById('shop');
    shop.innerHTML = menuItemsData
        .map((x) => {
            const { id, name, info, price, img, type } = x;
            return `
                <div id="product-id-${id}" class="item">
                    <img width="220" src="${img}" alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${info}</p>
                        <div class="container">
                            <div class="price-quantity">
                                <h2>$ ${price} </h2>
                            </div>
                            <div class="buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                                    <div id=${id} class="quantity"> 0 </div>
                                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                        </div>                      
                    </div>
                    </div>
                </div>
            `;
        })
        .join('');
}
generateShop();

const increment = (id) => {
    const itemId = id;
    const search = basket.find((x) =>  x.id === itemId
    );
    if (search === undefined ){
        basket.push({
            id: itemId,
            item: 1
        })
    } else {
        search.item += 1;
        };

    // console.log(basket);
    update(id);
}

const decrement = (id) => {
    const itemId = id;
    const search = basket.find((x) => { 
        return  x.id === itemId;
    });
    if (search.item === 0) return ;
    else {
        search.item -= 1;
    };

    // console.log(basket);
    update(id)
}

const update = (id) => {
  const search = basket.find((x) => { 
    return  x.id === id;
 });
  console.log(search);
}
