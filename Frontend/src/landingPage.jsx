import React from "react";
import './landingPage.css';
import LandingPageHeader from "./landingPageHeader";


const LandingPage = () => {
    return (
        <div className="bg d-flex flex-column">
            <LandingPageHeader></LandingPageHeader>
            <div>
                <div className="d-flex justify-content-center m-4 flex-column">
                    <div className="mainHeading">
                        Welltrackify : Your Ultimate Companion
                    </div>
                    <div className="desc">
                        Welltrackify revolutionizes the fitness journey, offering a comprehensive platform for gyms, Zumba, and meditation centers. With personalized dashboards, activity tracking, nutrition suggestions, and interactive features like virtual diaries and curated music playlists, it's the ultimate companion for both users and administrators. Stay motivated, informed, and inspired every step of the way with Welltrackify.
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src='./wellOne.png' alt='Welltrackify 1' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
