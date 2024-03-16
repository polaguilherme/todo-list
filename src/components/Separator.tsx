import * as Separator from "@radix-ui/react-separator";

export default function Separators() {
  return (
    <Separator.Root
      className="bg-white m-1 data-[orientation=vertical]:h-7 data-[orientation=vertical]:w-px items-center flex"
      decorative
      orientation="vertical"
    />
  );
}
