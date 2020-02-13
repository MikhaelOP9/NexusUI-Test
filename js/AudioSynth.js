window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context = new AudioContext(),
    settings = {
    id: 'keyboard',
    width: 695,
    height: 60,
    octaves: 5,
    hoverColour: "firebrick", 
    },
    keyboard = new QwertyHancock(settings);

masterGain = context.createGain();
nodes = [];

masterGain.gain.value = 0.3;
masterGain.connect(context.destination); 

keyboard.keyDown = function (note, frequency) {
    var oscillator = context.createOscillator();
    oscillator.type = waveForm;
    oscillator.frequency.value = frequency;
    oscillator.connect(masterGain);
    oscillator.start(0);

    nodes.push(oscillator);
};

keyboard.keyUp = function (note, frequency) {
    var new_nodes = [];

    for (var i = 0; i < nodes.length; i++) {
        if (Math.round(nodes[i].frequency.value) === Math.round(frequency)) {
            nodes[i].stop(0);
            nodes[i].disconnect();
        } else {
            new_nodes.push(nodes[i]);
        }
    }

    nodes = new_nodes;
};

