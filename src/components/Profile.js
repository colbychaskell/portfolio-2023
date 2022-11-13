import React from "react";
import ProfileImage from "./img/profile.jpg";
import "./Profile.css";

export const Profile = (props) => {
    return (
        <div className="profile">
            <img src={ProfileImage} alt="Profile" />
            <div className="bio">
                <h2>Front-End Software Engineer</h2>
                <p>I am a software engineer and a senior studying CE/CS at USC. I am working to build elegant and powerful front-end user experiences. My favorite technologies at the moment are ReactJS and SwiftUI. My other skills include C++, Python, and Machine Learning. </p>
                <p>Feel free to reach out by email or connect with me on Linkedin!</p>
            </div>
        </div>
    );
}