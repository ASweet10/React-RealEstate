
import sanFrancisco from "../images/sanfrancisco_townhouse.jpg"
import boise from "../images/Boise_ColonialBlue.jpg"
import brooklyn from "../images/Boise_ColonialBlue.jpg"
import buffalo from "../images/Boise_ColonialBlue.jpg"
import chicago from "../images/Boise_ColonialBlue.jpg"
import milwaukee from "../images/Milwaukee_BrickHouse.jpg"
import kansasCity from "../images/Boise_ColonialBlue.jpg"
import madison from "../images/Madison_ColonialBlue.jpg"
import minneapolis from "../images/Minneapolis_Cottage.jpg"
import annwu from "../images/annwu.jpg"

export const properties = [
    {
        id: 1,
        propertyName: "San Francisco Townhouse",
        realtor: "Sunshine Realty Trust",
        address: "28 West Parker, San Francisco, CA",
        zip: 94108,
        bedrooms: 2,
        bathrooms: 1,
        size: 1500,
        price: 349750,
        listingActive: true,
        imageUrl: sanFrancisco
    },
    {
        id: 2,
        propertyName: "Modern Urban Retreat",
        realtor: "124 Realty",
        address: "28175 Harbor Drive, Duluth, MN",
        zip: 55555,
        bedrooms: 4,
        bathrooms: 3,
        size: 3500,
        price: 875500,
        listingActive: false,
        imageUrl: brooklyn

    },
    {
        id: 3,
        propertyName: "Milwaukee Brick House",
        realtor: "New Horizons Realty",
        address: "53 East Broadway, Milwaukee, WI",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 1850,
        price: 185800,
        listingActive: true,
        imageUrl: milwaukee

    },
    {
        id: 4,
        propertyName: "Minneapolis Cottage",
        realtor: "Bridge Realty Group",
        address: "2417 North Booker, Minneapolis, MN",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 2200,
        price: 289900,
        listingActive: true,
        imageUrl: minneapolis

    },
    {
        id: 5,
        propertyName: "Madison Colonial",
        realtor: "Ace Realty",
        address: "211 North Sunset, Madison, WI",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 2400,
        price: 290900,
        listingActive: true,
        imageUrl: boise

    },
    {
        id: 6,
        propertyName: "Madison Colonial",
        realtor: "Ace Realty",
        address: "211 North Sunset, Madison, WI",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 2400,
        price: 290900,
        listingActive: true,
        imageUrl: boise

    },
    {
        id: 7,
        propertyName: "Madison Colonial",
        realtor: "Ace Realty",
        address: "211 North Sunset, Madison, WI",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 2400,
        price: 290900,
        listingActive: true,
        imageUrl: chicago

    },
    {
        id: 8,
        propertyName: "Madison Colonial",
        realtor: "Ace Realty",
        address: "211 North Sunset, Madison, WI",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 2400,
        price: 290900,
        listingActive: true,
        imageUrl: kansasCity
    }
]

export const cities = [
    { 
        id: 1,
        image: "",
        cityName: "New York",
        numberOfProperties: 80
    },
    { 
        id: 2,
        image: "",
        cityName: "Chicago",
        numberOfProperties: 95
    }
]

export const userReviews = [
    {
        id: 1,
        name: "Adam Smith",
        profession: "Real Estate Agent",
        image: annwu,
        stars: 5,
        review: "I needed to sell a real estate property quickly. RentPro made the process simple and efficient.",
    },
    {
        id: 2,
        name: "Maria Sanchez",
        profession: "Property Owner",
        image: annwu,
        stars: 5,
        review: "My first time using RentPro I found a tenant almost immediately. I will definitely use them again.",
    },
    {
        id: 3,
        name: "Emily Wilson",
        profession: "Real Estate Agent",
        image: annwu,
        stars: 4,
        review: "I've referred multiple clients to RentPro and they have all been satisfied so far.",
    },
    {
        id: 4,
        name: "Ann Wu",
        profession: "Real Estate Agent",
        image: annwu,
        stars: 5,
        review: "Usually it takes me weeks to list my property and start to get offers. On RentPro I was getting offers before the end of the week!",
    },
    {
        id: 5,
        name: "Sarah Porter",
        profession: "Tenant",
        image: annwu,
        stars: 5,
        review: "I've tried multiple different rental websites and this is my favorite. They clearly care about their customers.",
    },
    {
        id: 6,
        name: "Amy Jackson",
        profession: "Property Owner",
        image: annwu,
        stars: 4,
        review: "My experience on RentPro has been excellent. I've bought and sold properties with ease. I just wish there were more filter options.",
    },
    {
        id: 7,
        name: "Mark Miller",
        profession: "Tenant",
        image: annwu,
        stars: 5,
        review: "I love RentPro. It makes the apartment hunting process a lot easier.",
    },
]

export const managementCompanies = [
    { 
        id: 1,
        name: "Ace Realty",
        logo: "/next.svg",
        units: 1231,
        communities: 15,
        cities: 8,
    },
    { 
        id: 2,
        name: "Bridge Realty Group",
        logo: "/next.svg",
        units: 1576,
        communities: 21,
        cities: 11,
    },
    { 
        id: 3,
        name: "New Horizons Realty",
        logo: "/next.svg",
        units: 891,
        communities: 11,
        cities: 6,
    },
    { 
        id: 4,
        name: "124 Realty",
        logo: "/next.svg",
        units: 1037,
        communities: 12,
        cities: 7,
    }
]