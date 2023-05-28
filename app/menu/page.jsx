import CardContainer from "@/components/menu/CardContainer";

export default function Menu() {
  const menu = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
        { name: 'Bruschetta', price: 8.99, image:'/images/food/Bruschetta.jpg', size:'1 pcs', orderToday:5, orderWeek:40 },
        { name: 'Chicken Wings', price: 10.99, image:'/images/food/ChickenWings.jpg', size:'15 pcs', orderToday:6, orderWeek:29 },
        { name: 'Caprese Salad', price: 9.99, image:'/images/food/CapreseSalad.jpg', size:'1 set', orderToday:2, orderWeek:34 },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', price: 16.99, image:'/images/food/GrilledSalmon.jpg', size:'2 pcs', orderToday:7, orderWeek:41 },
        { name: 'Steak with Fries', price: 18.99, image:'/images/food/SteakwithFries.jpg', size:'1 set', orderToday:1, orderWeek:8 },
        { name: 'Pasta Carbonara', price: 14.99, image:'/images/food/PastaCarbonara.jpg', size:'1 set', orderToday:4, orderWeek:25 },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Cake', price: 7.99, image:'/images/food/ChocolateCake.jpg', size:'1 pcs', orderToday:0, orderWeek:10 },
        { name: 'Tiramisu', price: 6.99, image:'/images/food/Tiramisu.jpg', size:'1 pcs', orderToday:6, orderWeek:24 },
        { name: 'Cheesecake', price: 8.99, image:'/images/food/Cheesecake.jpg', size:'1 pcs', orderToday:4, orderWeek:12 },
      ],
    },
  ];
  return (
    <div className="px-6 pt-6 lg:grid grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        {menu.map((category, index) => (
          <CardContainer category={category} key={index}/>
        ))}
      </div>
      <div className='hidden lg:block h-[500px] sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
        setting
      </div>
    </div>
  )
}
