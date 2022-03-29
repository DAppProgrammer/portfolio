import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsYoutube />
    </div>
  </div>
);

export default SocialMedia;
