INSERT INTO houses (name,address,city,state,zipcode,image,monthly_morgage_amount,desired_rent)
VALUES (${name},${address},${city},${state},${zipcode},${image},${monthly_morgage_amount},${desired_rent});

SELECT * 
FROM houses
