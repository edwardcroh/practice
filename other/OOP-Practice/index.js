// Object Literal
const obj = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('drawing from object literal syntax');
  }
};

// obj.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('drawing from factory function');
    }
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('drawing from constructor function');
  };
}

const another = new Circle(1);

// Stopwatch

function Stopwatch() {
  let startTime = 0;
  let endTime = 0;
  let running = 0;
  let duration = 0;

  this.start = function() {
    running ? console.error('Already running!') : (running = true);
    startTime = new Date();
    console.log('Started stopwatch!');
  };

  this.stop = function() {
    !running ? console.error('Stopwatch is not started!') : (running = false);
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    console.log('Stopped stopwatch');
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}
