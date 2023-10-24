import React from 'react'
import Pro from './Pro'


export default function Products() {
    const products = [
        {id:1,name:'product one',desc:'this is product one',price:1000},
        {id:2,name:'product two',desc:'this is product two',price:2000},
        {id:3,name:'product three',desc:'this is product three',price:3000},
    ];
  return (
    <>
        <section className='my-5'>
           <div className='row'>
                <div className="col-md-12 text-center mb-4 title">
                    <div>
                        <h1 className="pt-2">Recipes</h1>
                    </div>
                </div>
           </div>

           <div className='row'>
           {/* <Pro name={'Best Pizza Dough Ever'}/>
           <Pro name={'Deep Dish Fruit Pizza'}/>
           <Pro/>
           <Pro/> */}
           {products.map((product)=>{
            return <Pro {...product} key={product.id}/>
           {/* return <Pro name={product.name} desc={product.desc} key={product.id}/> */}
           }
           )
           }

{/* 
                <div className="col-md-6">
                    <div>
                        <h2 className="pt-2">Best Pizza Dough Ever</h2>
                        <p>Price: 35 ILS</p>
                        <p>
                            Publisher: 4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled,1 3/4 (.44 ounce) teaspoons salt,1 teaspoon (.11 ounce) instant yeast,1/4 cup (2 ounces) olive oil (optional),1 3/4 cups (14 ounces) water, ice cold (40F),Semolina flour OR cornmeal for dusting
                        </p>
                        <p>Recipe ID: 47746</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                    <h2 className="pt-2">Deep Dish Fruit Pizza</h2>
                        <p>Price: 45 ILS</p>
                        <p>
                        Publisher: 1-1/3 cup Shortening (may Substitute Butter),1-1/2 cup Sugar,1 teaspoon Orange Zest,1 teaspoon Vanilla,2 whole Eggs,8 teaspoons Whole Milk,4 cups All-purpose Flour,3 teaspoons Baking Powder,1/2 teaspoon Salt,2 jars (13 Ounces Each) Marshmallow Creme,2 packages (8 Ounces Each) Cream Cheese,Peaches,Kiwi Fruit,Blueberries,Pears,Raspberries,Other Fruit Optional
                        </p>
                        <p>Recipe ID: 46956</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                    <div>
                    <h2 className="pt-2">Cauliflower Pizza Crust (with BBQ Chicken Pizza)</h2>
                        <p>Price: 70 ILS</p>
                        <p>
                        Publisher: 1 medium head cauliflower, cut into florets,1 egg,1/2 cup mozzarella, shredded,1 teaspoon oregano or Italian seasoning blend,salt and pepper to taste,1 cup chicken, cooked and shredded,1/2 cup barbecue sauce,3/4 cup mozzarella, shredded,red onion to taste, thinly sliced,fresh cilantro to taste
                        </p>
                        <p>Recipe ID: 41470</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                    <div>
                    <h2 className="pt-2">Pizza Quesadillas (aka Pizzadillas)</h2>
                        <p>Price: 90 ILS</p>
                        <p>
                        Publisher: 2 (10 inch) tortilla,1 cup mozzarella, shredded,3 tablespoons pizza sauce,16 slices pepperoni,1 tablespoon sliced black olives,3 tablespoons pizza sauce,1/2 cup mozzarella, shredded,3 slices pepperoni,1 tablespoon sliced black olives,2 (10 inch) tortilla,1 cup mozzarella, shredded,4 tablespoons pizza sauce,16 slices pepperoni,1 tablespoon sliced black olives
                        </p>
                        <p>Recipe ID: 35478</p>
                    </div>
                    </div>
                </div> */}
           </div>
        </section>
    </>
  )
}
