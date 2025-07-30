import { useEffect } from "react";
import SectionHeading from "../../components/SectionHeading";
import { useUserStore } from "../../stores/useUserStore";
import ProfileCard from "../../components/Cards/ProfileCard";
import ResetPostHistoryButton from "../../components/Cards/ResetCard";

export default function Profile() {

    const { user, getUserDetails } = useUserStore()

    useEffect(() => {
        getUserDetails(1)
    }, [])

    return (
        <div className="w-full max-w-2xl mx-auto">
            <SectionHeading text="👤 My Profile" />
            <ProfileCard user={user} />
            <ResetPostHistoryButton />
        </div>
    );
}
