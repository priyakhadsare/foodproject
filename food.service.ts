import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Tag } from 'src/app/shared/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number): Foods{
  return this.getAll().find(food => food.id == id)!;
}

getAllFoodByTag(tag: string): Foods[] {
  return tag == "All" ?
  this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
}

getAllTag(): Tag[]{
  return [
    { name: 'All', count: 8 },
    { name: 'Fastfood', count: 6 },
    { name: 'Burger', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'Slowfood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Cocktails',count: 1 },
    {name: 'Fries', count: 1 }

  ];
  
}


  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Burger',
        cookTime:'10-20',
        price: 10,
        favorite: true,
        origins:['Italy'],
        star:2.5,
        imageUrl:'/assets/food1.jpg',
        tags: ['Fastfood','Burger'],

        },
      {
        id:2,
        name:'Chinese',
        price:40,
        cookTime:'10-15',
        favorite: false,
        origins: ['china'],
        star:4.7,
        imageUrl:'/assets/food2.jpg',
        tags:['Fastfood','Lunch'],
      },
      {
        id:3,
        name:'Cocktails',
        price:30,
        cookTime:'10-15',
        favorite:false,
        origins:['germany'],
        star:3.5,
        imageUrl:'/assets/food3.jpg',
        tags:['Fastfood','Cocktails'],

      },//javascript
      {
      id:4,
        name:'Fries',
        price:20,
        cookTime:'10-15',
        favorite:true,
        origins:['France'],
        star:3.5,
        imageUrl:'/assets/food4.jpg',
        tags:['Slowfood','Fries'],

    },
    {
      id:5,
        name:'Hamburger',
        price:30,
        cookTime:'10-15',
        favorite:true,
        origins:['China','france'],
        star:3.5,
        imageUrl:'/assets/food5.jpg',
        tags:['Fastfood','Burger','Lunch','Hamburger'],
    },
    {
      id:6,
        name:'Manchurian',
        price:60,
        cookTime:'15-20',
        favorite:false,
        origins:['Germany'],
        star:3.3,
        imageUrl:'/assets/food6.jpg',
        tags:['Slowfood','Lunch'],
    },
    {
      id:7,
        name:'Paneer Masala',
        price:50,
        cookTime:'15-20',
        favorite:false,
        origins:['India'],
        star:4,
        imageUrl:'/assets/food7.jpg',
        tags:['Paneer','Fastfood'],

    },
    {
      id:8,
        name:'Pizza',
        price:70,
        cookTime:'15-20',
        favorite:true,
        origins:['france'],
        star:4.9,
        imageUrl:'/assets/food8.jpg',
        tags:['Fastfood','Pizza'],

    },
  ]

    }

  }
    

  

