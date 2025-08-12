import { useEffect } from "react";
import SectionHeading from "../../components/SectionHeading";
import { useUserStore } from "../../stores/useUserStore";
import ProfileCard from "../../components/Cards/ProfileCard";
import ResetPostHistoryButton from "../../components/Cards/ResetCard";

export default function Profile() {
  const { user_id, user, getUserDetails } = useUserStore();

  useEffect(() => {
    getUserDetails(user_id);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto pl-64">
      <SectionHeading text="👤 My Profile" />
      <ProfileCard user={user} />
      <ResetPostHistoryButton />
    </div>
  );
}
