import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const QtyModBtn = ({
  qty,
  incrementQty,
  decrementQty,
}: {
  qty: any;
  incrementQty: any;
  decrementQty: any;
}) => {
  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        onClick={decrementQty}
        className="text-gray-700 p-3 w-10 h-8 rounded-none"
      >
        <Minus />
      </Button>
      <span className="text-gray-700 text-sm flex items-center justify-center w-10 h-10">
        {qty}
      </span>
      <Button
        variant={"outline"}
        onClick={incrementQty}
        className="text-gray-700 p-3 w-10 h-8 rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QtyModBtn;
