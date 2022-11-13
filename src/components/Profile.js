import React from "react";
import ProfileImage from "./img/profile.jpg";
import "./Profile.css";

export const Profile = (props) => {
    return (
        <div className="profile">
            <img src={ProfileImage} alt="Profile" />
            <div className="bio">
                <h2>Front-End Software Engineer</h2>
                <p>I am focused on creating elegant and powerful Front-End experiences. My favorite technologies are currently ReactJS and SwiftUI. My other skills include C++, Python, and Machine Learning. </p>
            </div>
        </div>
    );
}