import React, { Component } from "react";
import Poems from "./Components/Poems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [
        {
          id: 0,
          title: "Falling Flowers",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "When petals fall in autumn,",
          line2: "Why admire cherry blossoms?",
          line3: "Because cherry blossoms fall,",
          line4: "Spring petals bloom in their place."
        },
        {
          id: 1,
          title: "Chasing Clouds",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Promising my love my return",
          line2: "I chased clouds floating far from home.",
          line3: "Returning home did I forget",
          line4: "My love had left since long ago."
        },
        {
          id: 2,
          title: "While Waiting",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "When snow piles hills in the road",
          line2: "Or rain floods mud in the fields",
          line3: "Never stop visiting here.",
          line4: "Always will I be waiting."
        },
        {
          id: 3,
          title: "Snow Soil",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Twin leaves shoot from the same branch",
          line2: "But part at differing times.",
          line3: "By winter both sleep in snow",
          line4: "And return to the same soil."
        },
        {
          id: 4,
          title: "After Absence",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Pine tree planted long ago",
          line2: "By my axe you fall in place.",
          line3: "How your absence reminds of",
          line4: "Gone days passed beneath your shade."
        },
        {
          id: 5,
          title: "Lantern Light",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Behind paper screens I hear your sigh",
          line2: "As I visit in secret moonlight.",
          line3: "A lantern of fireflies briefly lights",
          line4: "The lasting image of your shadow."
        },
        {
          id: 6,
          title: "To Tea",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Before your grave I think of mist",
          line2: "Floating over warm cups of tea.",
          line3: "Before we parted you promised",
          line4: "To share another drink with me."
        },
        {
          id: 7,
          title: "Watching Water",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Leaves brush the water",
          line2: "Leaving small ripples.",
          line3: "Parts of the water",
          line4: "Part ways forever."
        },
        {
          id: 8,
          title: "Still Sleeping",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "For the same reason",
          line2: "Snow falls in winter",
          line3: "My love never wakes.",
          line4: "Still, I watch her dream."
        },
        {
          id: 9,
          title: "Recalling Rain",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "When rain fell",
          line2: "We had stayed.",
          line3: "When skies cleared",
          line4: "I remained."
        },
        {
          id: 10,
          title: "Leaving Letters",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Awaiting my reply",
          line2: "My maiden waits alone.",
          line3: "Near where she stays I leave",
          line4: "Letters from long ago."
        },
        {
          id: 11,
          title: "Softenend Sounds",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "When waters receded from these shores",
          line2: "I often waited for their return.",
          line3: "Now without my watching waves still go",
          line4: "As I hear echoes from far away."
        },
        {
          id: 12,
          title: "Same Snow",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "When snow first fell some winters ago",
          line2: "Though seasons have changed our tie remains.",
          line3: "When you opened your small palm to snow",
          line4: "I regret not having done the same."
        },
        {
          id: 13,
          title: "Broken Bond",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Between us this ribbon",
          line2: "Ties two things together.",
          line3: "Had I known your distance",
          line4: "I would never have pulled."
        },
        {
          id: 14,
          title: "Lying Light",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "On that hill as I turned to leave",
          line2: "You told me to walk further still.",
          line3: "By your side I turned to confess,",
          line4: "Lying below a quiet moon."
        },
        {
          id: 15,
          title: "Fine Flame",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Blind to your flame during daylight",
          line2: "I chased the moon until evening.",
          line3: "After the moon floated farther,",
          line4: "I recall your embers at dawn."
        },
        {
          id: 16,
          title: "Continued Crossing",
          src: "https://develijahlee.github.io/uic/yonseiEmblem.svg",
          alt: "A single flower",
          line1: "Crossing this bridge for ten thousand steps,",
          line2: "I wonder what waited over there.",
          line3: "Ahead are still mountains and rivers,",
          line4: "With ten thousand bridges still to cross."
        },
        {
          id: 17,
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
