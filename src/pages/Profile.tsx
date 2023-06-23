import React from "react";
import { auth } from "../firebase.config";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : <>Not Logged In</>
};

export default Profile;
