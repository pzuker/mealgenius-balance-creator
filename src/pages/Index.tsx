
import Header from "@/components/Header";
import MealCard from "@/components/MealCard";
import AIRecommendation from "@/components/AIRecommendation";

const Index = () => {
  const meals = [
    {
      title: "Quinoa Buddha Bowl",
      description: "A nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing",
      calories: 450,
      prepTime: "25 min",
      servings: 2,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Grilled Salmon with Asparagus",
      description: "Fresh salmon fillet with grilled asparagus and lemon herb sauce",
      calories: 380,
      prepTime: "20 min",
      servings: 1,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mediterranean Chickpea Salad",
      description: "Fresh and light salad with chickpeas, cucumber, tomatoes, and feta cheese",
      calories: 320,
      prepTime: "15 min",
      servings: 2,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Today's Meals</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {meals.map((meal, index) => (
                <MealCard key={index} {...meal} />
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <AIRecommendation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
