import React, { useContext } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LetterCaseCapitalizeIcon } from "@radix-ui/react-icons";
import { Gear, Moon } from "phosphor-react";
import { ContextList } from "../context/ContextList";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const { TaskOnAlfabeticOrder } = useContext(ContextList);
  // const [theme, setTheme] = useState("light");

  // function toogleTheme() {
  //   setTheme(theme === "light" ? "dark" : "light");
  // }

  function handleAlfabeticOrder() {
    TaskOnAlfabeticOrder();
    window.location.reload();
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Gear
            size={34}
            className="cursor-pointer hover:scale-110 duration-200 hover:rotate-180"
            onClick={() => setOpenDropDown(!openDropDown)}
          />
        </DropdownMenu.Trigger>

        {openDropDown && (
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="duration min-w-[220px] bg-gray-700 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <DropdownMenu.CheckboxItem
                onClick={handleAlfabeticOrder}
                className="cursor-pointer group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              >
                <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <LetterCaseCapitalizeIcon className="text-gray-400" />
                </DropdownMenu.ItemIndicator>
                Ordenar alfabeticamente
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
              <DropdownMenu.Sub>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={2}
                    alignOffset={-5}
                  ></DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

              <DropdownMenu.CheckboxItem
                className="cursor-pointer group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                <DropdownMenu.ItemIndicator
                  className="absolute left-0 w-[25px] inline-flex items-center justify-center"
                  // onClick={toogleTheme}
                >
                  <Moon />
                </DropdownMenu.ItemIndicator>
                Tema
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

              <DropdownMenu.Arrow className="fill-gray-700" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
