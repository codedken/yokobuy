import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AlertDialogMenu = ({
  action,
  children,
}: {
  action: any;
  children: any;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-fit rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Logging out?</AlertDialogTitle>
          <AlertDialogDescription className="whitespace-nowrap">
            Are you sure you want to logout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="font-bold">No</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#192a66] font-bold hover:bg-[#304aa8]"
            onClick={action}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogMenu;
