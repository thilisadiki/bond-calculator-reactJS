import React from 'react';
import './App.css';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, LinkedinIcon, FacebookIcon, TwitterIcon, WhatsappIcon, WhatsappShareButton } from 'react-share';


const ShareButtons = ({ url, title, description }) => {
  return (
    <div>
      <h3 className='title'>Share with friends</h3>
      <FacebookShareButton className='shareIcons' 
      url={url} quote={title}>
      <FacebookIcon /> 
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
      <TwitterIcon /> 
      </TwitterShareButton>

      <LinkedinShareButton className='shareIcons'
      url={url} title={title} summary={description}>
       <LinkedinIcon /> 
      </LinkedinShareButton>

      <WhatsappShareButton
      url={url} title={title}>
         <WhatsappIcon/>
      </WhatsappShareButton>

    </div>
  );
};

export default ShareButtons;
