class RecipeBook
  has a recipe
end

class Recipe
  has ingredients
end

class StarterRecipe < Recipe
end

class MainCourseRecipe < Recipe
end

class DessertRecipe < Recipe
end

class Ingredient
end

module Conversion
  has temperature conversion
  has measurement conversion
end
