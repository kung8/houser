SELECT * 
FROM houses

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VarChar(50) NOT NULL,
    address VarChar(100) NOT NULL,
    city VarChar(50) NOT NULL,
    state VarChar(2) NOT NULL, 
    zipcode INT NOT NULL
)

INSERT INTO houses (name,address,city,state,zipcode)
VALUES  ('Todd','123 Main Street','Lehi','UT',12345),
        ('Clayton','456 Center Street','Provo','UT',67890),
        ('Hunter','345 Real Street','Houston','TX',10293),
        ('Mark','987 Fake Street','San Diego','CA',78964),
        ('Bryan','432 N Sycamore','Philadelphia','PA',34567)

ALTER TABLE houses 
ADD COLUMN image TEXT,
ADD COLUMN monthly_morgage_amount FLOAT,
ADD COLUMN desired_rent FLOAT