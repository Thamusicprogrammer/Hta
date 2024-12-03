// pages/index.js
import React from 'react';
import SponsorSlider from '../components/SponsorSlider';  // Go up one directory to 'components'
import Main from '@/components/main';  // Import the 'Main' component which contains the slider

const HomePage = () => {
  return (
    <div>
      {/* Main Slider Section */}
      <Main /> <br />

      {/* Sponsor Slider Section */}
      <SponsorSlider />
    </div>
  );
};

export default HomePage;
