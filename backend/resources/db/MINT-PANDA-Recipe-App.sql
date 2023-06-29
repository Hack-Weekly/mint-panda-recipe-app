BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--------------------
-- Create databse --
--------------------
DROP TABLE IF EXISTS recipe CASCADE;
DROP TABLE IF EXISTS recipe_tag_link CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS recipe_ingredient_link CASCADE;

CREATE TABLE recipe (
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
  title text NOT NULL ,
  serving int NOT NULL,
  instruction text NOT NULL,
  imageurl text
);

CREATE TABLE recipe_tag_link (
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
  recipe_id uuid NOT NULL,
  tag_id uuid NOT NULL
);

CREATE TABLE tag (
  id uuid  PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
  name text NOT NULL
);

CREATE TABLE ingredient (
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
  name text NOT NULL
);

CREATE TABLE recipe_ingredient_link (
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
  recipe_id uuid NOT NULL,
  ingredient_id uuid NOT NULL,
  amount int NOT NULL
);

------------------
-- Foreign keys --
------------------
ALTER TABLE recipe_tag_link 
ADD FOREIGN KEY (recipe_id) 
REFERENCES recipe (id)
ON DELETE CASCADE;

ALTER TABLE recipe_tag_link 
ADD FOREIGN KEY (tag_id) 
REFERENCES tag (id)
ON DELETE CASCADE;

ALTER TABLE recipe_ingredient_link 
ADD FOREIGN KEY (recipe_id) 
REFERENCES recipe (id)
ON DELETE CASCADE;

ALTER TABLE recipe_ingredient_link 
ADD FOREIGN KEY (ingredient_id) 
REFERENCES ingredient (id)
ON DELETE CASCADE;

----------------
-- Dummy data --
----------------
INSERT INTO tag (name)
VALUES 
('Easy'),
('Quick'),
('Difficult');

INSERT INTO ingredient (name)
VALUES
('Potato'),
('Spinach'),
('Chicken Breast'),
('Ham'),
('Rice'),
('Tomato');

INSERT INTO recipe (title, serving,  instruction, imageurl)
VALUES
('Stracciatella (Italian Wedding Soup)', 4, 'Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into "rags." Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as "Stracciatella" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don''t-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sugarlovespices.com%2Fwp-content%2Fuploads%2F2022%2F02%2FItalian-wedding-soup-with-stracciatella-feature-plated-bread-and-wine.jpg&tbnid=zMY_5cXq6VfenM&vet=12ahUKEwjs44OO0Oj_AhXm5zgGHRotDkEQMygAegUIARDPAQ..i&imgrefurl=https%3A%2F%2Fwww.sugarlovespices.com%2Fitalian-wedding-soup-with-stracciatella%2F&docid=T-_rs9WHx8-3FM&w=1200&h=800&q=Stracciatella%20(Italian%20Wedding%20Soup)&ved=2ahUKEwjs44OO0Oj_AhXm5zgGHRotDkEQMygAegUIARDPAQ'),
('Fried Chicken Breast', 4, 'Mix dry ingredients in pie plate, place yogurt, flour and egg white in separate pie plates. Dip chicken in yogurt, then in flour, then in egg white. Roll in bread crumbs, coating well. Put on baking pan sprayed with Pam. Bake at 400 degrees for 45 to 60 minutes. 10 % Fat', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.alphafoodie.com%2Fwp-content%2Fuploads%2F2022%2F08%2FFried-Chicken-2-of-2.jpeg&tbnid=eK4SC97f9gxDdM&vet=12ahUKEwjE6bSh0Oj_AhUZyKACHdpfAvsQMygAegUIARCQAg..i&imgrefurl=https%3A%2F%2Fwww.alphafoodie.com%2Fcrispy-fried-chicken-breast%2F&docid=6EIqkzgqsq5JVM&w=1200&h=1200&q=Fried%20Chicken%20Breast&ved=2ahUKEwjE6bSh0Oj_AhUZyKACHdpfAvsQMygAegUIARCQAg'),
('Emeril''s Milk Chocolate Cheesecake with Mascerated Berries', 12, '1. Preheat the oven to 350 degrees Fahrenheit. 2. Combine the crumbs and the butter together. Mix well and press into a 10 inch spring-form pan. 3. In a food processor, with the metal blade, process the cream cheese until smooth. 4. Add 1 cup of the sugar and blend. 5. Add the eggs one at a time to thoroughly incorporate into the cheese mixture. Add the heavy cream. Add the flour, salt and vanilla and blend until smooth. 6. In a steady stream, pour in the melted chocolate. Pour mixture into the prepared pan and bake for 1 hour and 15 minutes or until the cake is set. 7. Remove from the oven and with a knife loosen the sides from the pan. This will prevent the cake from splitting down the center. 8. Completely cool the cake before cutting. 9. In a mixing bowl, combine the remaining sugar, berries, and Grand Marnier, mix well. 10. Cover with plastic wrap and refrigerate for 2 to 3 hours. 11. Slice the cake into twelve slices and garnish each slice with the berries, sweetened whip cream and fresh mint sprigs. Yields: 12 servings Notes: If you want to do right by Mom this weekend, pay close attention! Emeril''s Milk Chocolate Cheesecake Food Correspondent Emeril Lagasse serves up a delicious treat for Mother''s Day.', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.emerils.com%2Fmilk%2520chocolate%2520cheesecake2.jpeg&tbnid=o58EYWXXfme9TM&vet=12ahUKEwiL_rG40Oj_AhWX4aACHdnxAAcQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.emerils.com%2F123288%2Fmilk-chocolate-cheesecake&docid=K4W3ZWjV6BAdJM&w=3456&h=3456&q=Emeril%5C%27s%20Milk%20Chocolate%20Cheesecake%20with%20Mascerated%20Berries&ved=2ahUKEwiL_rG40Oj_AhWX4aACHdnxAAcQMygAegQIARBP');

INSERT INTO recipe_tag_link (recipe_id, tag_id)
SELECT b.id, a.id
from tag a, recipe b
limit 1;

INSERT INTO recipe_ingredient_link (recipe_id, ingredient_id, amount)
SELECT a.id, b.id, 3 
from recipe a, ingredient b 
limit 1;

END;