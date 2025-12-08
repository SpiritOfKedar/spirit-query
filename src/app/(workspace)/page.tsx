import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
export default async function Home() {
  const user = await currentUser()
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <UserButton user={user} />
    </div>
  );
}
