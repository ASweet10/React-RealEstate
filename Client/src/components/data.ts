import ranchTan from "../images/ranchTan.jpg"
import colonial from "../images/colonialBlue.jpg"
import suburbanHouse2 from "../images/suburbanHouse2.jpg"
import houseGarage from "../images/houseGarage.jpg"
import ranch from "../images/ranch.jpg"
import brickHouse from "../images/brickHouse.jpg"
import suburbanHouse from "../images/suburbanHouse.jpg"
import ranchBlue from "../images/ranchBlue.jpg"
import cottage from "../images/cottage.jpg"

export const properties = [
    {
        id: 1,
        realtor: "Parker Brothers Realty",
        address: "28 N Baldwin, Glen Ellyn, IL",
        zip: 55555,
        bedrooms: 3,
        bathrooms: 3,
        size: 2350,
        price: 349750,
        listingActive: true,
        imageUrl: ranchTan,
        lat: 41.8500,
        lng: 271.9500
    },
    {
        id: 2,
        realtor: "Baker & Wakefield",
        address: "28175 Harbor Drive, Wheaton, IL",
        zip: 55555,
        bedrooms: 4,
        bathrooms: 3,
        size: 3000,
        price: 525500,
        listingActive: false,
        imageUrl: suburbanHouse2,
        lat: 41.8400,
        lng: 271.8700
    },
    {
        id: 3,
        realtor: "New Horizons Realty",
        address: "53 E Broadway, Northlake, IL",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 1650,
        price: 285000,
        listingActive: true,
        imageUrl: brickHouse,
        lat: 41.900,
        lng: 272.1000
    },
    {
        id: 4,
        realtor: "The Keller Group",
        address: "2417 N Booker, Warrenville, IL",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 1900,
        price: 289900,
        listingActive: true,
        imageUrl: cottage,
        lat: 41.8100,
        lng: 271.8200
    },
    {
        id: 5,
        realtor: "Farmer's Bank",
        address: "122 S Main, Western Springs, IL",
        zip: 55555,
        bedrooms: 3,
        bathrooms: 2,
        size: 2200,
        price: 290500,
        listingActive: true,
        imageUrl: colonial,
        lat: 41.8200,
        lng: 272.100
    },
    {
        id: 6,
        realtor: "Ace Realty",
        address: "211 N Sunset, Winfield, IL",
        zip: 55555,
        bedrooms: 2,
        bathrooms: 2,
        size: 1800,
        price: 265000,
        listingActive: true,
        imageUrl: ranch,
        lat: 41.8800,
        lng: 271.8500
    },
    {
        id: 7,
        realtor: "Bluefin",
        address: "72 N Taylor, Roselle, IL",
        zip: 55555,
        bedrooms: 3,
        bathrooms: 2,
        size: 1900,
        price: 315000,
        listingActive: false,
        imageUrl: ranchBlue,
        lat: 42.0000,
        lng: 271.9200
    },
    {
        id: 8,
        realtor: "RE Experts",
        address: "31 E Maple, Bloomingdale, IL",
        zip: 55555,
        bedrooms: 4,
        bathrooms: 3,
        size: 2750,
        price: 314500,
        listingActive: false,
        imageUrl: suburbanHouse,
        lat: 41.9600,
        lng: 271.9600
    }
]

export const userReviews = [
    {
        id: 1,
        name: "Adam Smith",
        profession: "Real Estate Agent",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/adamsmith.jpg",
        stars: 5,
        review: "I needed to sell a real estate property quickly. RentPro made the process simple and efficient.",
    },
    {
        id: 2,
        name: "Maria Sanchez",
        profession: "Property Owner",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/mariasanchez.jpg",
        stars: 5,
        review: "My first time using RentPro I found a tenant almost immediately. I will definitely use them again.",
    },
    {
        id: 3,
        name: "Emily Wilson",
        profession: "Real Estate Agent",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/emilywilson.jpg",
        stars: 4,
        review: "I've referred multiple clients to RentPro and they have all been satisfied so far.",
    },
    {
        id: 4,
        name: "Ann Wu",
        profession: "Real Estate Agent",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/annwu.jpg",
        stars: 5,
        review: "Usually it takes me weeks to list my property and start to get offers. On RentPro I was getting offers before the end of the week!",
    },
    {
        id: 5,
        name: "Amy Jackson",
        profession: "Property Owner",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/amyjackson.jpg",
        stars: 4,
        review: "My experience on RentPro has been excellent. I've bought and sold properties with ease. I just wish there were more filter options.",
    },
    {
        id: 6,
        name: "Mark Miller",
        profession: "Tenant",
        image: "https://react-realestate1.s3.us-east-2.amazonaws.com/markmiller.jpg",
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