
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const AIRecommendation = () => {
  return (
    <Card className="bg-gradient-to-br from-sage-50 to-cream-50 border-sage-100">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-sage-500" />
          <CardTitle className="text-lg text-sage-700">AI Recommendation</CardTitle>
        </div>
        <CardDescription>
          Let our AI suggest personalized meals based on your preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          className="w-full bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white shadow-sm"
        >
          Get Personalized Suggestions
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIRecommendation;
