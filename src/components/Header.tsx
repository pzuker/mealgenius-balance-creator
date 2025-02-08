
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-sage-600">MealGenius</h1>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">Recipes</a>
          <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">Meal Plan</a>
          <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">Shopping List</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
