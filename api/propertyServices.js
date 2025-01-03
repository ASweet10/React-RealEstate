import { query } from "./db.js"

export const getProperties = async () => {
    const { rows } = await query('SELECT * FROM properties')
    return rows
}

export const createProperty = async(propertyData) => {
    const { name, realtor, address, zipcode, bedrooms, bathrooms, size, price, listingactive, image } = propertyData
    const { rows } = await query(
        `INSERT INTO properties (name, realtor, address, zipcode, bedrooms, bathrooms, size, price, listingactive, image) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [name, realtor, address, zipcode, bedrooms, bathrooms, size, price, listingactive, image]
    )
    return rows
}