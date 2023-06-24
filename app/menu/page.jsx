"use client"
import { useState } from "react";
import CardContainer from "@/components/menu/CardContainer";
import { HiPlusCircle } from "react-icons/hi";
import { MdControlPointDuplicate } from "react-icons/md";
import { ImCross } from "react-icons/im";

export default function Menu() {
  const [createShow, setCreateShow] = useState(false);
  const [menu, setMenu] = useState([
    {
      category: 'Appetizers',
      items: [
        { id: 1, name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { id: 2, name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { id: 3, name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { id: 4, name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { id: 5, name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { id: 6, name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { id: 7, name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { id: 8, name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { id: 9, name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { id: 10, name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { id: 11, name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { id: 12, name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { id: 13, name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { id: 14, name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { id: 15, name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
      ],
    },
    {
      category: 'Chinese',
      items: [
        { id: 16, name: 'Chicken Dumpling', price: 26.99, image:'/images/food/ChickenDumpling.jpg', size:'9 pcs', orderToday:7, orderWeek:41 },
        { id: 17, name: 'Dim Sum', price: 28.99, image:'/images/food/DimSum.jpg', size:'1 set', orderToday:1, orderWeek:8 },
        { id: 18, name: 'Kung Pao Tofu', price: 24.99, image:'/images/food/KungPaoTofu.jpg', size:'1 set', orderToday:4, orderWeek:25 },
        { id: 18, name: 'Sushi', price: 21.99, image:'/images/food/Sushi.jpg', size:'4 pcs', orderToday:4, orderWeek:25 },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { id: 19, name: 'Grilled Salmon', price: 16.99, image:'/images/food/GrilledSalmon.jpg', size:'2 pcs', orderToday:7, orderWeek:41 },
        { id: 20, name: 'Steak with Fries', price: 18.99, image:'/images/food/SteakwithFries.jpg', size:'1 set', orderToday:1, orderWeek:8 },
        { id: 21, name: 'Pasta Carbonara', price: 14.99, image:'/images/food/PastaCarbonara.jpg', size:'1 set', orderToday:4, orderWeek:25 },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { id: 22, name: 'Chocolate Cake', price: 7.99, image:'/images/food/ChocolateCake.jpg', size:'1 pcs', orderToday:0, orderWeek:10 },
        { id: 23, name: 'Tiramisu', price: 6.99, image:'/images/food/Tiramisu.jpg', size:'1 pcs', orderToday:6, orderWeek:24 },
        { id: 24, name: 'Cheesecake', price: 8.99, image:'/images/food/Cheesecake.jpg', size:'1 pcs', orderToday:4, orderWeek:12 },
      ],
    },
  ]);
  // Add new Category
  const [newCategory, setNewCategory] = useState('');
  const addCategory = (event) => {
    event.preventDefault();
    const categoryObject = {
      category: newCategory,
      items: [],
    };
    setMenu([...menu, categoryObject]);
    setNewCategory('');
  };
  // Add new Items
  const [selectedCategory, setSelectedCategory] = useState('');
  const itemId = Math.floor(Math.random());
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemSize, setItemSize] = useState('');
  const addItem = (event) => {
    event.preventDefault();
    const updatedMenu = menu.map((category) => {
      if (category.category === selectedCategory) {
        const newItem = { id:itemId, name: itemName, price: parseFloat(itemPrice), size: itemSize };
        return {
          ...category,
          items: [...category.items, newItem],
        };
      }
      return category;
    });
    setMenu(updatedMenu);
    setItemName('');
    setItemPrice('');
    setItemSize('');
  };
  // Delete an item
  const deleteItem = (categoryId, itemName) => {
    const updatedMenu = menu.map((category) => {
      if (category.category === categoryId) {
        const updatedItems = category.items.filter((item) => item.name !== itemName);
        return {
          ...category,
          items: updatedItems,
        };
      }
      return category;
    });

    setMenu(updatedMenu);
  };
  //Edit an Item
  const editItem = (itemCategory, updatedItem) => {
    const updatedMenu = menu.map((category) => {
      if (category.category === itemCategory) {
        const updatedItems = category.items.map((item) => {
          if (item.id === updatedItem.id) {
            return { ...item, ...updatedItem };
          }
          return item;
        });
        return {
          ...category,
          items: updatedItems,
        };
      }
      return category;
    });

    setMenu(updatedMenu);
  };
  return (
    <div>
      <div className="sticky px-10 pt-6 flex items-center justify-between lg:hidden">
        <h5 className="text-2xl font-medium text-gray-600 dark:text-white">Menu</h5>
        <button
          onClick={()=>setCreateShow((p)=>!p)}
          className="h-10 gap-2 px-2 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
        >
          <span className="flex space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white"> <span>Create</span> <MdControlPointDuplicate size={22}/></span>
        </button>
      </div>
      <div className="px-6 pt-6 lg:grid grid-cols-4 gap-6 w-full">
        <div className="lg:col-span-3">
          {menu.map((category, index) => (
            <CardContainer 
              key={index}
              category={category}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </div>
        <div className={`${createShow?'fixed left-4 right-4 ring ring-cyan-300':'hidden sticky'} top-[88px] lg:block h-fit space-y-3 p-4 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10`}>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold md:text-4xl text-center">Create</h1>
            <button
              aria-label="Close Nav"
              onClick={()=>setCreateShow((p)=>!p)}
              className="h-10 w-10 flex items-center justify-center rounded-xl border lg:hidden text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <ImCross/>
            </button>
          </div>
          {/* Create new Category form */}
          <h1 className="pt-2">Create new category</h1>
          <form onSubmit={addCategory} className="flex space-x-2">
            <input
              type="text"
              name="category"
              placeholder="Category"
              aria-label="new category"
              value={newCategory}
              onChange={(e)=>setNewCategory(e.target.value)}
              class="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
            />
            <button
              type="submit"
              disabled={!newCategory}
              className="h-10 w-10 gap-2 px-2 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white"><HiPlusCircle size={22}/></span>
            </button>
          </form>
          <div className="flex items-center justify-center w-full text-gray-500 font-extrabold">
            <h1>-----</h1>
            <h1> x </h1>
            <h1>-----</h1>
          </div>
          {/* Create new Items from */}
          <h1 className="pt-2">Create new Items</h1>
          <form className="space-y-3">
            <select
              value={selectedCategory}
              onChange={(e)=>setSelectedCategory(e.target.value)}
              className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition-all duration-300 dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="">Select a category</option>
              {menu.map((category, index) => (
                <option key={index} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e)=>setItemName(e.target.value)}
              className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
            />
            <div className="flex space-x-2">
              <input
                type="number"
                step="0.01"
                placeholder="Item Price"
                value={itemPrice}
                onChange={(e)=>setItemPrice(e.target.value)}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
              <input
                type="text"
                placeholder="Item Size"
                value={itemSize}
                onChange={(e)=>setItemSize(e.target.value)}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                onClick={addItem}
                className="h-10 w-fit gap-2 px-4 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                disabled={!selectedCategory || !itemName || !itemPrice || !itemSize}
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
