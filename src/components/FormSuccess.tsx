import { CheckCircle } from "lucide-react";
function FormSuccess({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle />
      <p>{message}</p>
    </div>
  );
}
export default FormSuccess;
