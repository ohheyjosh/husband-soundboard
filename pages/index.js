import React, { Component } from "react";
import Sound from "../components/Sound";

export default class extends Component {
  render() {
    return (
      <main className="m-3 sm:m-4 md:m-5 lg:m-6">
        <h1 className="text-gray-700 text-lg font-medium mb-4 sm:mb-6">
          Husband Soundboard
        </h1>
        <ul className="grid grid-cols-3 gap-6 lg:grid-cols-5 items-center justify-center h-full">
          <Sound emoji="❤️" src="/love.mp3" />
          <Sound emoji="👗" src="/look.mp3" />
          <Sound emoji="👶" src="/baby.mp3" />
          <Sound emoji="🍽" src="/dishes.mp3" />
          <Sound emoji="🧐" src="/right.mp3" />
          <Sound emoji="🌱" src="/plant.mp3" />
          <Sound emoji="🍱" src="/babysitter.mp3" />
          <Sound emoji="🧺" src="/laundry.mp3" />
          <Sound emoji="😔" src="/sorry.mp3" />
        </ul>
        <aside className="text-gray-500 text-base font-medium text-right mt-4 sm:mt-6">
          made with ♥ by{" "}
          <a
            href="https://github.com/ohheyjosh"
            className="text-gray-700 underline"
          >
            this husband
          </a>
        </aside>
      </main>
    );
  }
}
