import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h3 className="font-bold">ABOUT</h3>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h3 className="font-bold">COMMUNITY</h3>
        <p>Accessibility</p>
        <p>This is not a real site.</p>
        <p>Its a pretty awesome clone</p>
        <p>referrals accepted</p>
        <p>airbnb team light</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h3 className="font-bold">HOST</h3>
        <p>Saransh Khulbe Creations</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of builds</p>
        <p>Stay excited!</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h3 className="font-bold">SUPPORT</h3>
        <p>Hello Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi to YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
