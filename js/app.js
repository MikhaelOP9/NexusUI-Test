Nexus.colors.accent = "firebrick"
Nexus.colors.fill = "grey"

//FONCTIONNE-->
var waveForm = false;

var grainLoop = new Nexus.Toggle('#grainLoop');
grainLoop.on('change', function (v) {
    if (v) {
        waveForm = "square";
        
    } else {
        waveForm = "sine";
    }
    console.log(waveForm);
});


var grainRev = new Nexus.Toggle('#grainRev');
grainRev.on('change', function (v) {
    console.log(v);
});

//GRAIN Param : Line #1
var grainNB = new Nexus.Dial('#grainNB', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
grainNB.on('change', function (v) {
    console.log(v);
});
var posVar = new Nexus.Dial('#posVar', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
posVar.on('change', function (v) {
    console.log(v);
});
var grainRate = new Nexus.Dial('#grainRate', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
grainRate.on('change', function (v) {
    console.log(v);
});
var grainDet = new Nexus.Dial('#grainDet', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
grainDet.on('change', function (v) {
    console.log(v);
});
//GRAIN Param : Line #2
var period = new Nexus.Dial('#period', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
period.on('change', function (v) {
    console.log(v);
});
var dur = new Nexus.Dial('#dur', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
dur.on('change', function (v) {
    console.log(v);
});

var min = new Nexus.Dial('#min', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
min.on('change', function (v) {
    console.log(v);
});
var minVar = new Nexus.Dial('#minVar', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
minVar.on('change', function (v) {
    console.log(v);
});
//GRAIN Param : Line #3
var resample = new Nexus.Dial('#resample', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
grainDet.on('change', function (v) {
    console.log(v);
});
var resampleVar = new Nexus.Dial('#resampleVar', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
resampleVar.on('change', function (v) {
    console.log(v);
});
var overlap = new Nexus.Dial('#overlap', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
overlap.on('change', function (v) {
    console.log(v);
});
var attack = new Nexus.Slider("#attack", {
    'size': [20, 150],
    'mode': 'relative',  // 'relative' or 'absolute'
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
attack.on('change', function (v) {
    console.log(v);
});
var release = new Nexus.Slider("#release", {
    'size': [20, 150],
    'mode': 'relative',  // 'relative' or 'absolute'
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
release.on('change', function (v) {
    console.log(v);
});
var freqFilter1 = new Nexus.Dial('#freqFilter1', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
freqFilter1.on('change', function (v) {
    console.log(v);
});
var resFilter1 = new Nexus.Dial('#resFilter1', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
resFilter1.on('change', function (v) {
    console.log(v);
});
var freqFilter2 = new Nexus.Dial('#freqFilter2', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
freqFilter2.on('change', function (v) {
    console.log(v);
});
var resFilter2 = new Nexus.Dial('#resFilter2', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
resFilter2.on('change', function (v) {
    console.log(v);
});
var delStutter = new Nexus.Dial('#delStutter', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
delStutter.on('change', function (v) {
    console.log(v);
});
var sizeStutter = new Nexus.Dial('#sizeStutter', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
sizeStutter.on('change', function (v) {
    console.log(v);
});
var sizeVar = new Nexus.Dial('#sizeVar', {
    'size': [25, 25],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
sizeVar.on('change', function (v) {
    console.log(v);
});
var durationStutter = new Nexus.Dial('#durationStutter', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
durationStutter.on('change', function (v) {
    console.log(v);
});
var overlapStutter = new Nexus.Dial('#overlapStutter', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
overlapStutter.on('change', function (v) {
    console.log(v);
});
var wide = new Nexus.Dial('#wide', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
wide.on('change', function (v) {
    console.log(v);
});
var delayTime = new Nexus.Dial('#delayTime', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
delayTime.on('change', function (v) {
    console.log(v);
});
var delayTimeVar = new Nexus.Dial('#delayTimeVar', {
    'size': [25, 25],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
delayTimeVar.on('change', function (v) {
    console.log(v);
});
var feedbackTime = new Nexus.Dial('#feedbackTime', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
feedbackTime.on('change', function (v) {
    console.log(v);
});
var dryWet = new Nexus.Dial('#dryWet', {
    'size': [45, 45],
    'interaction': 'vertical', // "radial", "vertical", or "horizontal"
    'mode': 'relative', // "absolute" or "relative"
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0
})
dryWet.on('change', function (v) {
    console.log(v);
});

//KEYBOARD

var octPlus = new Nexus.TextButton('#octPlus', {
    'size': [40, 25],
    'state': false,
    'text': 'Oct<'
});
octPlus.on('change', function (v) {
    console.log(v);
});
var octMoins = new Nexus.TextButton('#octMoins', {
    'size': [40, 25],
    'state': false,
    'text': 'Oct>'
});
octMoins.on('change', function (v) {
    console.log(v);
});

var latch = new Nexus.TextButton('#latch', {
    'size': [80, 25],
    'state': false,
    'text': 'Latch',
    'alternateText': 'Unlatch'
});
latch.on('change', function (v) {
    console.log(v);
});


