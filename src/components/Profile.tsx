import ProfileImage from "./img/profile.jpg";
import "./Profile.css";

export const Profile = () => {
    return (
        <div className="profile">
            <img src={ProfileImage} alt="Profile" />
            <div className="bio">
                <h2 className="text-lg font-bold my-5">Full-Stack Software Engineer</h2>
                <p className="my-4 max-w-prose">I am a software engineer currently working on real-time simulation software for aerospace systems using C and C++.</p>
                   <p>I enjoy developing web applications with TypeScript, React, and NextJS.
                   I also have professional experience with Python, LLVM, DevOps tools, and SQL databases.</p>
            </div>
        </div>
    );
}
