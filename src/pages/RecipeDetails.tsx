
import { useParams, useNavigate } from "react-router-dom";
import { Flame, Clock, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API/database - using mock data for now
  const recipe = {
    title: "Quinoa Buddha Bowl",
    description: "A nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing",
    calories: 450,
    prepTime: "25 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 sweet potato, cubed",
      "1 cup chickpeas",
      "2 cups mixed greens",
      "1 avocado",
      "2 tbsp tahini"
    ],
    instructions: [
      "Rinse quinoa and cook with water according to package instructions",
      "Roast sweet potato cubes at 400°F for 25 minutes",
      "Drain and rinse chickpeas, season with olive oil and spices",
      "Make tahini dressing by mixing tahini with lemon juice and water",
      "Assemble bowls with quinoa base, roasted vegetables, and toppings",
      "Drizzle with tahini dressing and serve"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-6 text-sage-600 hover:text-sage-700"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Meals
        </Button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="object-cover w-full h-full"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {recipe.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-terracotta-400" />
                  <span>{recipe.calories} kcal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-sage-400" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-cream-500" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-600">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
