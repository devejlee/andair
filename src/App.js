import React, { Component } from "react";
import Poems from "./Components/Poems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [
        {
          id: 0,
          style: "fallingflowers",
          title: "Falling Flowers",
          src: "./img/fallingflowers.svg",
          alt: "A cherry blossom",
          line1: "When petals fall in autumn,",
          line2: "Why admire cherry blossoms?",
          line3: "Because cherry blossoms fall,",
          line4: "Spring petals bloom in their place."
        },
        {
          id: 1,
          style: "chasingclouds",
          title: "Chasing Clouds",
          src: "./img/chasingclouds.svg",
          alt: "Three clouds",
          line1: "Promising my love my return",
          line2: "I chased clouds floating far from home.",
          line3: "Returning home did I forget",
          line4: "My love had left since long ago."
        },
        {
          id: 2,
          style: "whilewaiting",
          title: "While Waiting",
          src: "./img/whilewaiting.svg",
          alt: "A torii gate",
          line1: "When snow piles hills in the road",
          line2: "Or rain floods mud in the fields",
          line3: "Never stop visiting here.",
          line4: "Always will I be waiting."
        },
        {
          id: 3,
          style: "snowsoil",
          title: "Snow Soil",
          src: "./img/snowsoil.svg",
          alt: "Two leaves",
          line1: "Twin leaves shoot from the same branch",
          line2: "But part at differing times.",
          line3: "By winter both sleep in snow",
          line4: "And return to the same soil."
        },
        {
          id: 4,
          style: "afterabsence",
          title: "After Absence",
          src: "./img/afterabsence.svg",
          alt: "A pine tree",
          line1: "Pine tree planted long ago",
          line2: "By my axe you fall in place.",
          line3: "How your absence reminds of",
          line4: "Those days passed beneath your shade."
        },
        {
          id: 5,
          style: "lanternlight",
          title: "Lantern Light",
          src: "./img/lanternlight.svg",
          alt: "A lantern",
          line1: "Behind paper screens I hear your sigh",
          line2: "As I visit in secret moonlight.",
          line3: "A lantern of fireflies briefly lights",
          line4: "The lasting image of your shadow."
        },
        {
          id: 6,
          style: "totea",
          title: "To Tea",
          src: "./img/totea.svg",
          alt: "A tea cup",
          line1: "Before your grave I think of mist",
          line2: "Floating over warm cups of tea.",
          line3: "Before we parted you promised",
          line4: "To share another drink with me."
        },
        {
          id: 7,
          style: "watchingwater",
          title: "Watching Water",
          src: "./img/watchingwater.svg",
          alt: "Water ripples",
          line1: "Leaves brush the water",
          line2: "Leaving small ripples.",
          line3: "Parts of the water",
          line4: "Part ways forever."
        },
        {
          id: 8,
          style: "stillsleeping",
          title: "Still Sleeping",
          src: "./img/stillsleeping.svg",
          alt: "A hairpin",
          line1: "For the same reason",
          line2: "Snow falls in winter",
          line3: "My love never wakes.",
          line4: "Still, I watch her dream."
        },
        {
          id: 9,
          style: "recallingrain",
          title: "Recalling Rain",
          src: "./img/recallingrain.svg",
          alt: "A wagasa umbrella",
          line1: "When rain fell",
          line2: "We had stayed.",
          line3: "When skies cleared",
          line4: "I remained."
        },
        {
          id: 10,
          style: "afterawakening",
          title: "After Awakening",
          src: "./img/afterawakening.svg",
          alt: "A star",
          line1: "Silver stars suspending night",
          line2: "Stay with me after I wake.",
          line3: "Dreaming your lights while asleep",
          line4: "Lets me forget morning came."
        },
        {
          id: 11,
          style: "turningtides",
          title: "Turning Tides",
          src: "./img/turningtides.svg",
          alt: "A single flower",
          line1: "When waters receded from these shores",
          line2: "I often waited for their return.",
          line3: "Now without my watching waves still turn",
          line4: "As I listen to tides far away."
        },
        {
          id: 12,
          style: "samesnow",
          title: "Same Snow",
          src: "./img/samesnow.svg",
          alt: "A snowflake",
          line1: "When snow first fell some winters ago",
          line2: "Though seasons have changed our tie remains.",
          line3: "When you opened your small palm to snow",
          line4: "I regret not having done the same."
        },
        {
          id: 13,
          style: "brokenbond",
          title: "Broken Bond",
          src: "./img/brokenbond.svg",
          alt: "A ripped ribbon",
          line1: "Between us this ribbon",
          line2: "Ties two things together.",
          line3: "Had I known your distance",
          line4: "I would never have pulled."
        },
        {
          id: 14,
          style: "lyinglight",
          title: "Lying Light",
          src: "./img/lyinglight.svg",
          alt: "The moon",
          line1: "On that hill as I turned to leave",
          line2: "You told me to walk further still.",
          line3: "By your side I turned to confess,",
          line4: "Lying below a quiet moon."
        },
        {
          id: 15,
          style: "fineflame",
          title: "Fine Flame",
          src: "./img/fineflame.svg",
          alt: "A flame",
          line1: "Blind to your flame during daylight",
          line2: "I chased the moon until evening.",
          line3: "After the moon floated farther,",
          line4: "I recall your embers at dawn."
        },
        {
          id: 16,
          style: "continuedcrossing",
          title: "Continued Crossing",
          src: "./img/continuedcrossing.svg",
          alt: "A bridge",
          line1: "Crossing this bridge for ten thousand steps,",
          line2: "I wonder what waited over there.",
          line3: "Ahead are still mountains and rivers,",
          line4: "With ten thousand bridges still to cross."
        },
        {
          id: 17,
          style: "andair",
          title: "And Air",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "For what was and is",
          line2: "And always will be",
          line3: "Elusive as air",
          line4: "And gently so free"
        }
      ]
    };
  }

  render() {
    return <Poems data={this.state.poems} />;
  }
}

export default App;
