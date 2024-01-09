class Television {
  // Public properties
  caseColor;

  // Private properties
  #screenWidth;
  #screenHeight;
  #isOn;
  #volume;
  #channel;

  // Static property
  static supportedResolutions = ["720p", "1080p", "4K"];

  // Constructor
  constructor(screenWidth, screenHeight, caseColor = "black") {
    this.#screenWidth = screenWidth;
    this.#screenHeight = screenHeight;
    this.caseColor = caseColor;
    this.#isOn = false;
    this.#volume = 50;
    this.#channel = 1;
  }

  // Public methods
  turnOn() {
    this.#isOn = true;
    console.log("TV is on");
  }

  turnOff() {
    this.#isOn = false;
    console.log("TV is off");
    // void function () {
    //     console.log('goodbye');
    // }();
  }

  volumeControl(newVolume) {
    if (newVolume >= 0 && newVolume <= 100) {
      this.#volume = newVolume;
      console.log(`Volume set to ${this.#volume}`);
    } else {
      console.log("Volume should be between 0 and 100");
    }
  }

  changeChannel(channel) {
    if (channel > 0) {
      this.#channel = channel;
      console.log(`Channel changed to ${this.#channel}`);
    } else {
      console.log("Invalid channel number");
    }
  }

  // Getter (Readonly) for screen dimensions
  get screenDimensions() {
    return `${this.#screenWidth} x ${this.#screenHeight}`;
  }

  // private methods
  #showTvInternals() {
    console.log("This is sensitive, private info about the TV");
  }
}

export default Television;
