import MANavbar from "./small_components/MANavbar";
import Analytics from "./small_components/Analytics";
import EditAdImgButton from "./small_components/EditAdImgButton";
import EditPostButton from "./small_components/EditPostButton";
import "../css/MAHomePage.scss";

// CAMPAIGN_MANAGER and ADMIN contain the components below
import CampaignManage from "./small_components/CampaignManage";
import React from "react";

function MAHomePage() {
    // User info
    const [userRole, setUserRole] = React.useState("");
    React.useEffect(() => {
        fetch("/api/myProfile")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setUserRole(data.userRole);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, []);

    return (
        <>
            <MANavbar />
            <section className="manager-admin-home-content">
                <h2>
                    {userRole.includes("ADMIN")
                        ? "Welcome, Administrator"
                        : userRole.includes("CAMPAIGN_MANAGER")
                        ? "Welcome, Campaign Manager."
                        : "Welcome, Manager."}
                </h2>
                <Analytics />
                <section className="manager-admin-home-btn-set">
                    <EditAdImgButton />
                    <EditPostButton />
                </section>
            </section>

            {(userRole.includes("CAMPAIGN_MANAGER") ||
                userRole.includes("ADMIN")) && <CampaignManage />}
        </>
    );
}

export default MAHomePage;
