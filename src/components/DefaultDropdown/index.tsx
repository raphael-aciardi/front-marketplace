import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Category {
  name: string;
  href: string;
};
interface DefaultDropdownProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  labelTitle?: string;
  items: Category[];
}

export function DefaultDropdown({ title, leftIcon, rightIcon, labelTitle, items }: DefaultDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="cursor-pointer">{leftIcon}{title}{rightIcon}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {labelTitle && (<DropdownMenuLabel>{labelTitle}</DropdownMenuLabel>)}
          {labelTitle && <DropdownMenuSeparator />}
          {items.map((item) => (
            <DropdownMenuItem key={item.name} onClick={() => console.log(item.href)}>{item.name}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}