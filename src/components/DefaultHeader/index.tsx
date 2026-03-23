import { Search, User, Heart, ShoppingCart, Menu, Headphones, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Logo from "@assets/logo.png";
import { DefaultDropdown } from "../DefaultDropdown";

export function DefaultHeader() {

  const categories = [
    { name: "Hardware", href: "#" },
    { name: "Computadores", href: "#" },
    { name: "Monitores", href: "#" },
    { name: "Gamer", href: "#" },
    { name: "Smartphones", href: "#" },
    { name: "TVs", href: "#" },
    { name: "Ofertas do dia", href: "#" },
  ] ;


  return (
    <header className="w-full font-sans">
      <div className="bg-marketplace-blue text-white text-xs py-1 px-4 flex justify-between items-center border-b border-marketplace-blue-dark">
        <div className="flex gap-4  mx-auto w-full px-4">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Headphones size={14} /> Atendimento
          </a>
          <a href="#" className="hover:underline">Venda no Marketplace!</a>
          <a href="#" className="hover:underline">Seja Prime</a>
        </div>
      </div>

      <div className="bg-marketplace-blue text-white">
        <div className="px-10 mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20 hover:text-white rounded-full">
              <Menu size={24} />
            </Button>
            <div className="flex items-center cursor-pointer">
              <img className="h-20" src={Logo} alt="logo da empresa" />
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <ShoppingCart size={24} />
            </div>
          </div>

          <div className="flex-1 w-full relative max-w-3xl order-last md:order-none">
            <div className="flex w-full bg-white rounded overflow-hidden h-11 border-2 border-transparent focus-within:border-blue-400 transition-all">
              <Input 
                type="text" 
                placeholder="Busque por produtos, marcas e muito mais..." 
                className="flex-1 h-full px-4 text-gray-700 text-sm border-none shadow-none rounded-l-md focus-visible:ring-0 placeholder:text-gray-400"
              />
              <Button className="w-14 h-full bg-marketplace-orange rounded-r-md hover:bg-marketplace-orange-hover transition-colors">
                <Search size={22} className="text-white" />
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 justify-end">
            <div className="flex items-center gap-2 cursor-pointer group">
              <User size={30} className="text-white group-hover:text-gray-200 transition-colors" />
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-200">Faça <span className="font-bold text-white group-hover:underline">Login</span> ou</span>
                <span className="font-bold text-white group-hover:underline">crie seu cadastro</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
                <Headphones size={26} />
              </div>
              
              <div className="flex items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
                <Heart size={26} />
              </div>

              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <ShoppingCart size={28} className="text-white group-hover:text-gray-200 transition-colors shrink-0" />
                  <Badge className="absolute -top-2 -right-3 bg-marketplace-orange hover:bg-marketplace-orange text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center p-0 border-none shrink-0 pointer-events-none">
                    0
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-marketplace-orange text-white shadow-md">
        <div className="max-w-7xl mx-auto max-h-12 px-4 flex items-center text-sm font-bold uppercase overflow-x-auto whitespace-nowrap no-scrollbar hide-scroll">

          
          
          <div className="flex items-center h-12">
            <DefaultDropdown title="CATEGORIAS" leftIcon={<ListIcon  size={20} />} items={categories} />
            <Button variant="ghost"  className="cursor-pointer ml-4 px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">HARDWARE</a>
            </Button>
            <Button variant="ghost"  className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">COMPUTADORES</a>
            </Button>
            <Button variant="ghost" className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">MONITORES</a>
            </Button>
            <Button variant="ghost"  className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">GAMER</a>
            </Button>
            <Button variant="ghost" className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">SMARTPHONES</a>
            </Button>
            <Button variant="ghost" className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">TVs</a>
            </Button>
            <Button variant="ghost" className="cursor-pointer px-4 h-full flex items-center hover:bg-black/10 hover:text-white text-white rounded-none">
              <a href="#">OFERTAS DO DIA</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
