
import veg from '../Assets/Images/maylike/veg.jpg'
import nonveg from '../Assets/Images/maylike/nonveg.jpg'
import dairyfood from '../Assets/Images/maylike/dairy.jpg'
import fruits from '../Assets/Images/maylike/fruits.jpg'

export const youMayLikeData = [
    {
        image: veg,
        category: "veg"
    },
    {
        image: nonveg,
        category: "nonveg"
    },
    {
        image: dairyfood,
        category: "dairy"
    },
    {
        image: fruits,
        category: "fruits"
    },
]
import flour from '../Assets/Images/product/atta.png'
import biscuit from '../Assets/Images/product/biscuit.png'
import chocolate from '../Assets/Images/product/chocolate.png'
import dairy from '../Assets/Images/product/dairy.png'
import deo from '../Assets/Images/product/deo.png'
import instantfood from '../Assets/Images/product/instant_food.png'
import personalcare from '../Assets/Images/product/pesonal_care.png'
import snacks from '../Assets/Images/product/snacks.png'


export const productData = [
    {
        image: flour,
        name: "Restaurent 123",
        price: 500,
        comparePrice: 600,
        distance: 2,
        items: ["veg", "nonveg", "dairy", "fruits"]
    },
    {
        image: biscuit,
        name: "Eat and Repeat",
        price: 500,
        comparePrice: 600,
        distance: 5,
        items: ["veg", "nonveg", "dairy"]
    },
    {
        image: chocolate,
        name: "Non veg Restaurent and Bar",
        price: 500,
        comparePrice: 600,
        distance: 7,
        items: ["veg", "nonveg", "fruits"]
    },
    {
        image: dairy,
        name: "Chai Sutta Bar",
        price: 500,
        comparePrice: 600,
        distance: 9,
        items: ["veg", "fruits", "dairy"]

    },
    {
        image: deo,
        name: "Veggie Special Restaurent",
        price: 500,
        comparePrice: 600,
        distance: 10,
        items: ["veg"]
    },
    {
        image: instantfood,
        name: "Bhupender Jogi Food Corner",
        price: 500,
        comparePrice: 600,
        distance: 1.5,
        items: ["nonveg", "dairy"]
    },
    {
        image: personalcare,
        name: "Hoping Minds Rasoi Wala",
        price: 500,
        comparePrice: 600,
        distance: 1,
        items: ["veg", "nonveg", "dairy"]
    },
    {
        image: snacks,
        name: "New corner and Sweet Corner",
        price: 500,
        comparePrice: 600,
        distance: 1.8,
        items: ["veg", "nonveg", "dairy"]
    },
]

export const filterData = {
    ProductType: ["veg", "nonveg", "dairy"],
    price: ["100-200", "200-300", "300-400", "500-600", "upto 1000"],
    discount: ["10%", "20%", "12.5%", "upto 100", "upto 50"],
    distance: ["1", "2", "2.5", "3", "3.5"]
}