CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "ingredient" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" TEXT NOT NULL,
    "serving" INTEGER NOT NULL,
    "instruction" TEXT NOT NULL,
    "imageurl" TEXT,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_ingredient_link" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_id" UUID NOT NULL,
    "ingredient_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "recipe_ingredient_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_tag_link" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "recipe_id" UUID NOT NULL,
    "tag_id" UUID NOT NULL,

    CONSTRAINT "recipe_tag_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipe_ingredient_link" ADD CONSTRAINT "recipe_ingredient_link_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_ingredient_link" ADD CONSTRAINT "recipe_ingredient_link_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_tag_link" ADD CONSTRAINT "recipe_tag_link_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recipe_tag_link" ADD CONSTRAINT "recipe_tag_link_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

