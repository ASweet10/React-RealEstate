import * as propertyService from "../propertyServices.js"

export const getProperties = async (req, res) => {
    try {
        const properties = await propertyService.getProperties()
        res.status(200).json(properties)
    } catch (err) {
        console.error('Error fetching properties', error)
        res.status(500).json({ message: 'Server error'})
    }
}

export const createProperty = async (req, res) => {
    try {
        const propertyData = req.body
        const newProperty = await propertyService.createProperty(propertyData)
        res.status(200).json(newProperty)
    } catch (err) {
        console.error('Error creating property', error)
        res.status(500).json({ message: 'Server error'})
    }
}