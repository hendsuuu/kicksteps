import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full flex justify-between p-5">
      <div className="flex justify-evenly  sm:w-full sm:max-w-sm">
        <div className="text-center">
          <a href="/dashboard">
            <div className="mx-2">
              <Image
                alt="travel"
                src="/assets/Group 1.png"
                width={50}
                height={50}
              />
            </div>
            <div className="font-bold">Home</div>
          </a>
        </div>
        <div className="text-center">
          <a href="/user">
            <div className="mx-2">
              <Image
                alt="travel"
                src="/assets/Group 1.png"
                width={50}
                height={50}
              />
            </div>
            <div className="font-bold">User</div>
          </a>
        </div>
        <div className="text-center">
          <div className="mx-2">
            <Image
              alt="travel"
              src="/assets/Group 1.png"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold">Profile</div>
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="h-20 logo"></div>
      </div>
      <div className="flex justify-evenly sm:w-full sm:max-w-sm">
        <div className="text-center">
          <div className="mx-2">
            <Image
              alt="travel"
              src="/assets/Group 1.png"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold">Setting</div>
        </div>
        <div className="text-center">
          <div className="mx-2">
            <Image
              alt="travel"
              src="/assets/Group 1.png"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold">About us</div>
        </div>
        <div className="text-center">
          <div className="mx-2">
            <Image
              alt="travel"
              src="/assets/Group 1.png"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
