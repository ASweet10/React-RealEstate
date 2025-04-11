/* Start Server: net start MYSQL80 */

/* Create Property Table */
CREATE TABLE properties (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	realtor VARCHAR(100) NOT NULL,
	address VARCHAR(100) NOT NULL,
	zipcode INT NOT NULL,
	bedrooms SMALLINT NOT NULL,
	bathrooms SMALLINT NOT NULL,
	size SMALLINT NOT NULL,
	price INT NOT NULL,
	listingActive BOOLEAN NOT NULL DEFAULT FALSE,
	image VARCHAR(100) NOT NULL,
	lat DECIMAL(7,4) NOT NULL,
	lng DECIMAL(7,4) NOT NULL,
)


/* Insert Properties */
INSERT INTO properties (name, realtor, address, zipcode, bedrooms, bathrooms, size, price, listingactive, image) VALUES
('Townhouse', 'Sunshine Realty Trust', '2817 N Hacienda Blvd, San Francisco, CA', 94108, 2, 1, 1500, 349750, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/sanfrancisco_townhouse.jpg'),
('Brick House', 'New Horizons Realty', '53 E Broadway, Milwaukee, WI', 55555, 2, 2, 1850, 185800, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Milwaukee_BrickHouse.jpg'),
('Cottage', 'Bridge Realty Group', '244 N Booker Minneapolis, MN', 55215, 2, 2, 2200, 289900, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Minneapolis_Cottage.jpg'),
('Colonial', 'Ace Realty', '211 N Sunset, Madison, WI', 54111, 3, 2, 2400, 290900, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Boise_ColonialBlue.jpg'),
('Ranch', 'Citi Brokers', '51 S Steeple Ln, Chicago, IL', 41551, 3, 2, 2100, 285000, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Chicago_RanchWhite.jpg'),
('Ranch', 'Urban Property Group', 'N762 W331 Erie Ave, Buffalo, OH', 25111, 2, 2, 1900, 245500, FALSE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Buffalo_HouseGarage.jpg'),
('Suburban House', 'Turnkey Realty', '344 N Summer St, Kansas City, MO', 33111, 3, 2, 2400, 389900, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/KansasCity_SuburbanHouse.jpg'),
('Urban Retreat', 'Hometown Trust', '214 W Union St, Kingston, NY', 66721, 2, 2, 1900, 275500, TRUE, 'https://react-realestate1.s3.us-east-2.amazonaws.com/Brooklyn_ModernRetreat.jpg');


/* Insert Reviews */
INSERT INTO reviews (name, profession, image, stars, review) VALUES
('Adam Smith', 'Real Estate Agent', 'https://react-realestate1.s3.us-east-2.amazonaws.com/adamsmith.jpg', 5, 'I needed to sell a real estate property quickly. RentPro made the process simple and efficient.'),
('Maria Sanchez', 'Property Owner', 'https://react-realestate1.s3.us-east-2.amazonaws.com/mariasanchez.jpg', 5, 'My first time using RentPro I found a tenant almost immediately. I will definitely use them again'),
('Emily Wilson', 'Real Estate Agent', 'https://react-realestate1.s3.us-east-2.amazonaws.com/emilywilson.jpg', 4, 'I have referred multiple clients to RentPro and they have all been satisfied so far.'),
('Ann Wu', 'Real Estate Agent', 'https://react-realestate1.s3.us-east-2.amazonaws.com/annwu.jpg', 5, 'Usually it takes me weeks to get offers after listing a property. On RentPro I was getting offers before the end of the week!'),
('Amy Jackson', 'Property Owner', 'https://react-realestate1.s3.us-east-2.amazonaws.com/amyjackson.jpg', 4, 'My experience on RentPro has been excellent. I have bought and sold properties with ease. I just wish there were more filter options.'),
('Mark Miller', 'Tenant', 'https://react-realestate1.s3.us-east-2.amazonaws.com/markmiller.jpg', 5, 'I love RentPro. It makes the apartment hunting process a lot easier.');

/* Insert latlng */
ALTER TABLE properties
ADD lng DECIMAL(7, 4)
ALTER TABLE properties
ADD lat DECIMAL(7, 4)
UPDATE `realestate`.`properties` SET `lat` = '41.8200', `lng` = '271.9750' WHERE (`id` = '7');