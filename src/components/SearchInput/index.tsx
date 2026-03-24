import { Button, Input } from "@base-ui/react"
import { Search } from "lucide-react"

const SearchInput = () => {
    return (
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
    ) 
  }

export default SearchInput
        