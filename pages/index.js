import dynamic from "next/dynamic";
import React, { Component } from "react";

const Sound = dynamic(() => import("../components/Sound"));

export default class extends Component {
  render() {
    return (
      <main className="m-3 sm:m-4 md:m-5 lg:m-6">
        <h1 className="text-gray-700 text-lg font-medium mb-3">
          Husband Soundboard
        </h1>
        <ul className="grid grid-cols-3 gap-6 lg:grid-cols-5 items-center justify-center h-full">
          <Sound emoji="❤️" src="love" />
          <Sound emoji="👗" src="look" />
          <Sound emoji="👶" src="baby" />
          <Sound emoji="🍽" src="dishes" />
          <Sound emoji="🧐" src="right" />
          <Sound emoji="🌱" src="plant" />
          <Sound emoji="🍱" src="babysitter" />
          <Sound emoji="🧺" src="laundry" />
          <Sound emoji="😔" src="sorry" />
        </ul>
      </main>
    );
  }
}
