import React, { Component } from "react";
import Sound from "../components/Sound";

export default class extends Component {
  render() {
    return (
      <main className="m-3 sm:m-4 md:m-5 lg:m-6">
        <h1 class="text-gray-700 text-lg font-medium mb-3">
          Husband Soundboard
        </h1>
        <ul className="grid grid-cols-3 gap-6 lg:grid-cols-5 items-center justify-center h-full">
          <Sound emoji="❤️" src="I love you." />
          <Sound emoji="👗" src="You look really nice today." />
          <Sound
            emoji="👶"
            src="I've got the baby. Take some time for yourself."
          />
          <Sound emoji="🍽" src="I took care of the dishes already." />
          <Sound emoji="🧐" src="You're right." />
          <Sound
            emoji="🌱"
            src="That plant doesn't seen too expensive. You should get it."
          />
          <Sound emoji="🍱" src="I got a babysitter so we can go out." />
          <Sound
            emoji="🧺"
            src="I got a head start on the laundry. I hope that's okay."
          />
          <Sound emoji="😔" src="I'm sorry." />
        </ul>
      </main>
    );
  }
}
