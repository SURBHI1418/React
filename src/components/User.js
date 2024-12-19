import { useEffect, useState } from "react";
import { ABOUT_GIT_URL } from "../utils/constants";

const User = (props) => {
  const [aboutGit, setAboutGit] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(ABOUT_GIT_URL);
      const json = await data.json();
      setAboutGit(json);
    };
    fetchData();
  }, []);
  if (!aboutGit) {
    return <div>Loading...</div>; // Show loading while the data is being fetched
  }
  console.log(aboutGit);
  const { name, avatar_url, location, bio, company } = aboutGit;
  return (
    <div className="user-card-container">
      <h2>Name : {name} </h2>
      <img src={avatar_url} />
      <h3>Location : {location}</h3>
      <h3>Company : {company}</h3>

      <p>BIO : {bio}</p>
    </div>
  );
};
export default User;
