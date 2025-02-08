
import Header from "@/components/Header";
import MealCard from "@/components/MealCard";
import AIRecommendation from "@/components/AIRecommendation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const meals = [
    {
      title: language === 'es' ? "Bowl de Quinoa" : "Quinoa Buddha Bowl",
      description: language === 'es' 
        ? "Un tazón nutritivo con quinoa, vegetales asados y aderezo de tahini"
        : "A nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing",
      calories: 450,
      prepTime: language === 'es' ? "25 min" : "25 min",
      servings: 2,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: language === 'es' ? "Salmón a la Parrilla con Espárragos" : "Grilled Salmon with Asparagus",
      description: language === 'es'
        ? "Filete de salmón fresco con espárragos a la parrilla y salsa de hierbas y limón"
        : "Fresh salmon fillet with grilled asparagus and lemon herb sauce",
      calories: 380,
      prepTime: language === 'es' ? "20 min" : "20 min",
      servings: 1,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: language === 'es' ? "Ensalada Mediterránea de Garbanzos" : "Mediterranean Chickpea Salad",
      description: language === 'es'
        ? "Ensalada fresca y ligera con garbanzos, pepino, tomates y queso feta"
        : "Fresh and light salad with chickpeas, cucumber, tomatoes, and feta cheese",
      calories: 320,
      prepTime: language === 'es' ? "15 min" : "15 min",
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t.meals.todayMeals}</h2>
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
