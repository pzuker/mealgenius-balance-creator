
import { Flame, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

interface MealCardProps {
  title: string;
  description: string;
  calories: number;
  prepTime: string;
  servings: number;
  image: string;
}

const MealCard = ({ title, description, calories, prepTime, servings, image }: MealCardProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Flame className="w-4 h-4 text-terracotta-400" />
            <span>{calories} {t.meals.calories}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-sage-400" />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-cream-500" />
            <span>{servings} {t.meals.servings}</span>
          </div>
        </div>
        <Button 
          className="w-full bg-sage-500 hover:bg-sage-600 text-white"
          onClick={() => navigate(`/recipe/1`)}
        >
          {t.meals.viewRecipe}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MealCard;
