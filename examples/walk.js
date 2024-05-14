
i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
i.actionDuration = (i.actionDuration === undefined) ? 3000 : i.actionDuration;
i.travelDistanceX = (i.travelDistanceX === undefined) ? 200 : i.travelDistanceX;
i.travelDistanceY = (i.travelDistanceY === undefined) ? 0 : i.travelDistanceY;
i.actionSteps = (i.actionSteps === undefined) ? 1 : i.actionSteps;
i.travelGrowth = (i.travelGrowth === undefined) ? 0 : i.travelGrowth;

i.UpperBody = (i.UpperBody === undefined) ? true : i.UpperBody;
i.LowerBody = (i.LowerBody === undefined) ? true : i.LowerBody;

// Person
let pers = person.anim.prim
let Head = person.UpperBody.Head.anim.prim
let upBo = person.UpperBody.anim.prim
let Back = person.UpperBody.Back.WingLeftY.anim.prim
let larm = person.UpperBody.LeftY.Arm.anim.prim
let lfor = person.UpperBody.LeftY.Fore.anim.prim
let rarm = person.UpperBody.Right.Arm.anim.prim
let rfor = person.UpperBody.Right.Fore.anim.prim
let loBo = person.LowerBody.anim.prim
let lleg = person.LowerBody.LeftY.Leg.anim.prim 
let lcaf = person.LowerBody.LeftY.Calf.anim.prim
let rleg = person.LowerBody.Right.Leg.anim.prim
let rcaf = person.LowerBody.Right.Calf.anim.prim

// Sit in Chair Animation
let bframes = 4
let tranXStep = i.travelDistanceX/((i.actionSteps*2)+bframes)
let tranYStep = i.travelDistanceY/((i.actionSteps*2)+bframes)
console.log(tranYStep,tranXStep)
let travelS = i.travelGrowth/((i.actionSteps*2)+bframes)

i.stepsDuration = i.actionDuration/((i.actionSteps*2)+bframes)

// Frame 1 (Initial Contact) in to the Position 
//pers.modTransform({m:i.m,p:i.p,dur:i.actionDuration/frames,tranX:0,tranY:10,scalX:0,scalY:0,skewX:0,skewY:0,rotat:0,ease:i.ease})
if(i.UpperBody){
    // Arms: Begin to swing opposite of leading leg (5% movement).
    larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:-1,skewY:0,rotat:-80,ease:i.ease}) 
    rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:1,skewY:0,rotat:60,ease:i.ease})
}if(i.LowerBody){
    // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
    lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.05,scalY:0.05,skewX:0,skewY:0,rotat:0,ease:i.ease})
    rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:-10,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30,ease:i.ease})
    lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:0,ease:i.ease})
    rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:40,ease:i.ease})
    // Torso: Maintains an upright position, minimal lean (2%).
    loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:5,tranY:-10,scalX:0.05,scalY:0.05,skewX:0,skewY:0,rotat:0,ease:i.ease})
}
await sleep(i.stepsDuration)

// Frame 2 (Mid-Step)
pers.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:tranXStep,tranY:tranYStep,scalX:travelS,scalY:travelS,skewX:0,skewY:0,rotat:0,ease:i.ease}) //(affects movex a bit)
if(i.UpperBody){
    Head.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:1,ease:i.ease}) 
    // Arms: Begin to swing opposite of leading leg (5% movement).
    larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:80,ease:i.ease}) //add elbow bend)
    rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:-2,skewY:0,rotat:-75,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10,ease:i.ease}) 
    rfor.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10,ease:i.ease}) 
}if(i.LowerBody){
    // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
    lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:-1,scalX:0.05,scalY:0.05,skewX:0,skewY:0,rotat:0,ease:i.ease}) //(rotat affect power)
    rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:8,tranY:1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-60,ease:i.ease})
    lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:20,ease:i.ease})
    rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30,ease:i.ease})
    // Torso: Maintains an upright position, minimal lean (2%).
    loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10,ease:i.ease})
}
await sleep(i.stepsDuration)

for (let x = 0; x < i.actionSteps; x++) {

    // Frame 3 (Seated)
    pers.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:tranXStep,tranY:-2+(tranYStep),scalX:travelS,scalY:travelS,skewX:0,skewY:0,rotat:0,ease:i.ease})
    if(i.UpperBody){
        Head.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,scalX:0.015,scalY:0.015,rotat:1.5,ease:i.ease}) 
        // Arms: Begin to swing opposite of leading leg (5% movement).
        larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.05,scalY:0.05,skewX:0,skewY:0,rotat:-70,ease:i.ease}) 
        rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:1,skewY:0,rotat:70,ease:i.ease})
    }if(i.LowerBody){
        // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
        lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:15,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:-40,ease:i.ease})
        rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:-10,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:40,ease:i.ease})
        lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-7,ease:i.ease})
        rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:5,scalX:0,scalY:0,skewX:0,skewY:0,rotat:20,ease:i.ease})
        // Torso: Maintains an upright position, minimal lean (2%).
        loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.0,scalY:0,skewX:0,skewY:0,rotat:-5,ease:i.ease})
    }
    await sleep(i.stepsDuration)

    // Frame 3 Mirror (Seated)
    pers.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:tranXStep,tranY:2+(tranYStep),scalX:travelS,scalY:travelS,skewX:0,skewY:0,rotat:0,ease:i.ease})
    if(i.UpperBody){
        Head.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,scalX:-0.015,scalY:-0.015,rotat:-1.5,ease:i.ease}) 
        // Arms: Begin to swing opposite of leading leg (5% movement).
        larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:-0.05,scalY:-0.05,skewX:0,skewY:0,rotat:70,ease:i.ease}) 
        rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:-1,skewY:0,rotat:-70,ease:i.ease})
    }if(i.LowerBody){
        // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
        lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:-15,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:40,ease:i.ease})
        rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:10,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:-40,ease:i.ease})
        lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:7,ease:i.ease})
        rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:-5,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-20,ease:i.ease})
        // Torso: Maintains an upright position, minimal lean (2%).
        loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.0,scalY:0,skewX:0,skewY:0,rotat:5,ease:i.ease})
    }
    await sleep(i.stepsDuration)

}

// Frame 2 (Mid-Step)
pers.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:tranXStep,tranY:tranYStep,scalX:travelS,scalY:travelS,skewX:0,skewY:0,rotat:0,ease:i.ease}) //(affects movex a bit)
if(i.UpperBody){
    Head.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:-1,ease:i.ease}) 
    // Arms: Begin to swing opposite of leading leg (5% movement).
    larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-80,ease:i.ease}) //add elbow bend)
    rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:2,skewY:0,rotat:75,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10,ease:i.ease}) 
    rfor.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10,ease:i.ease}) 
}if(i.LowerBody){
    // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
    lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:1,scalX:-0.05,scalY:-0.05,skewX:0,skewY:0,rotat:0,ease:i.ease}) //(rotat affect power)
    rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:-8,tranY:-1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:60,ease:i.ease})
    lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-20,ease:i.ease})
    rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:-1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30,ease:i.ease})
    // Torso: Maintains an upright position, minimal lean (2%).
    loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10,ease:i.ease})
}
await sleep(i.stepsDuration)

// Frame 1 (Initial Contact) in to the Position 
//pers.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:10,scalX:0,scalY:0,skewX:0,skewY:0,rotat:0,ease:i.ease})
if(i.UpperBody){
    // Arms: Begin to swing opposite of leading leg (5% movement).
    larm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:1,skewY:0,rotat:80,ease:i.ease}) 
    rarm.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:-1,skewY:0,rotat:-60,ease:i.ease})
}if(i.LowerBody){
    // Legs: Leading leg steps forward with a slight knee bend (10% bend), trailing leg starts to lift off (5% lift).
    lleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:-0.05,scalY:-0.05,skewX:0,skewY:0,rotat:0,ease:i.ease})
    rleg.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:10,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30,ease:i.ease})
    lcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:0,ease:i.ease})
    rcaf.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-40,ease:i.ease})
    // Torso: Maintains an upright position, minimal lean (2%).
    loBo.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:-5,tranY:10,scalX:-0.05,scalY:-0.05,skewX:0,skewY:0,rotat:0,ease:i.ease})
}
await sleep(i.stepsDuration)
