

    //GRAIN Param : Line #1
    var dial = new Nexus.Dial('#grainNB', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#posVar', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#grainRate', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#grainDet', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    //GRAIN Param : Line #2
    var dial = new Nexus.Dial('#period', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    var dial = new Nexus.Dial('#dur', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    var dial = new Nexus.Dial('#min', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#minVar', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    //GRAIN Param : Line #3
    var dial = new Nexus.Dial('#resample', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    var dial = new Nexus.Dial('#resampleVar', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    var dial = new Nexus.Dial('#overlap', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    var slider = new Nexus.Slider("#attack", {
        'size': [20, 150],
        'mode': 'relative',  // 'relative' or 'absolute'
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var slider2 = new Nexus.Slider("#release", {
        'size': [20, 150],
        'mode': 'relative',  // 'relative' or 'absolute'
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#freqFilter1', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#resFilter1', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#freqFilter2', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#resFilter2', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#delStutter', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#sizeStutter', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#sizeVar', {
        'size': [25, 25],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#durationStutter', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#overlapStutter', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#wide', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#delayTime', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#delayTimeVar', {
        'size': [25, 25],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#feedbackTime', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })
    var dial = new Nexus.Dial('#dryWet', {
        'size': [45, 45],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0,
        'value': 0
    })

    //KEYBOARD

    var textbutton = new Nexus.TextButton('#latch',{
        'size': [80,30],
        'state': false,
        'text': 'Latch',
        'alternateText': 'Unlatch'
    });

    var keyboard = new QwertyHancock({
        id: 'keyboard',
        width: 600,
        height: 60,
        octaves: 5
    });
}

window.addEventListener('load', init);