// TIME and SYM verified
function wings (i){
    return new Promise(async function(resolve, reject) {

    // Person
    let pers = person.anim.prim
    let Head = person.UpperBody.Head.anim.prim
        let Eyes = person.UpperBody.Head.Face.Eyes.anim.prim
    let upBo = person.UpperBody.anim.prim
    let Back = person.UpperBody.Back.anim.prim
        let LWig = person.UpperBody.Back.WingLeftY.anim.prim
        let RWig = person.UpperBody.Back.WingRight.anim.prim
    let larm = person.UpperBody.LeftY.Arm.anim.prim
    let lfor = person.UpperBody.LeftY.Fore.anim.prim
    let rarm = person.UpperBody.Right.Arm.anim.prim
    let rfor = person.UpperBody.Right.Fore.anim.prim
    let loBo = person.LowerBody.anim.prim
    let lleg = person.LowerBody.LeftY.Leg.anim.prim 
    let lcaf = person.LowerBody.LeftY.Calf.anim.prim
    let rleg = person.LowerBody.Right.Leg.anim.prim
    let rcaf = person.LowerBody.Right.Calf.anim.prim

    // Basic
    i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
    i.actionDuration = (i.actionDuration === undefined) ? 1000 : i.actionDuration;
    // custom
    i.wingRotation = (i.armRotation === undefined) ? 1 : i.armRotation;
    i.actionSteps = (i.actionSteps === undefined) ? 10 : i.actionSteps;
    i.wingGrowthMod = (i.wingGrowthMod === undefined) ? 1 : i.wingGrowthMod;
    i.stepsDuration = i.actionDuration/((i.actionSteps*2)+2)

    LWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.5*i.wingGrowthMod,scalY:0.6*i.wingGrowthMod,skewX:0,skewY:0,rotat:40*i.wingRotation,ease:i.ease})        
    RWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0.5*i.wingGrowthMod,scalY:0.6*i.wingGrowthMod,skewX:0,skewY:0,rotat:-40*i.wingRotation,ease:i.ease})        
    await sleep(i.stepsDuration)  
    for (let j = 0; j < i.actionSteps; j++){
        // Up
        LWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30*i.wingRotation,ease:i.ease})        
        RWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30*i.wingRotation,ease:i.ease})  
        await sleep(i.stepsDuration)      
        // Down
        LWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30*i.wingRotation,ease:i.ease})        
        RWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30*i.wingRotation,ease:i.ease}) 
        await sleep(i.stepsDuration)        
    }
    LWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:-0.5*i.wingGrowthMod,scalY:-0.6*i.wingGrowthMod,skewX:0,skewY:0,rotat:-40*i.wingRotation,ease:i.ease})        
    RWig.modTransform({m:i.m,p:i.p,dur:i.stepsDuration,tranX:0,tranY:0,scalX:-0.5*i.wingGrowthMod,scalY:-0.6*i.wingGrowthMod,skewX:0,skewY:0,rotat:40*i.wingRotation,ease:i.ease})        
    await sleep(i.stepsDuration)

    resolve();
    })
} 

// Person
let pers = person.anim.prim
let Head = person.UpperBody.Head.anim.prim
    let Eyes = person.UpperBody.Head.Face.Eyes.anim.prim
let upBo = person.UpperBody.anim.prim
let Back = person.UpperBody.Back.anim.prim
    let LWig = person.UpperBody.Back.WingLeftY.anim.prim
    let RWig = person.UpperBody.Back.WingRight.anim.prim
let larm = person.UpperBody.LeftY.Arm.anim.prim
let lfor = person.UpperBody.LeftY.Fore.anim.prim
let rarm = person.UpperBody.Right.Arm.anim.prim
let rfor = person.UpperBody.Right.Fore.anim.prim
let loBo = person.LowerBody.anim.prim
let lleg = person.LowerBody.LeftY.Leg.anim.prim 
let lcaf = person.LowerBody.LeftY.Calf.anim.prim
let rleg = person.LowerBody.Right.Leg.anim.prim
let rcaf = person.LowerBody.Right.Calf.anim.prim

// Basic
i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
i.actionDuration = (i.actionDuration === undefined) ? 4000 : i.actionDuration;
// custom
i.bodyRotation = (i.bodyRotation === undefined) ? 1 : i.bodyRotation;
i.armRotation = (i.armRotation === undefined) ? 1 : i.armRotation;

let fly_path = [
    [60,-150],
    [60,5],
    [60,-5],
    [60,5],
    [60,-5],
    [60,150],
]

i.flight = (i.flight === undefined) ? fly_path : i.flight;
i.actionSteps = i.flight.length
i.stepsDuration = i.actionDuration/(i.flight.length)

fly_movement = {}
fly_movement.forward = {}
fly_movement.forward.action = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
}
fly_movement.forward.recover = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
}
fly_movement.backward = {}
fly_movement.backward.action = async function (p,power){
    loBo.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})

    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})

    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-15*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
}
fly_movement.backward.recover = async function (p,power){
    loBo.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})

    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})

    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:15*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
}
fly_movement.upward = {}
fly_movement.upward.action = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:12*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-6*power,ease:i.ease})
    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-7*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:1*power,ease:i.ease})
}
fly_movement.upward.recover = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-12*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:6*power,ease:i.ease})
    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:7*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-1*power,ease:i.ease})
}
fly_movement.downward = {}
fly_movement.downward.action = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
}
fly_movement.downward.recover = async function (p,power){
    lleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    rleg.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    lcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    rcaf.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    larm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    rarm.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
    lfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*power,ease:i.ease})
    rfor.modTransform({m:p.m,p:p.p,dur:p.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*power,ease:i.ease})
}

// Helper function to calculate movement intensity
function calculateIntensity(delta) {
    const normalMovementThreshold = 50; // "Normal" movement threshold
    const maxIntensityDelta = 100; // Delta value at which intensity reaches max (2 or 0)

    // Ensure delta is positive for calculation
    const positiveDelta = Math.abs(delta);

    if (positiveDelta < normalMovementThreshold) {
        // Delta less than threshold is considered normal, map directly to 1
        return 1;
    } else {
        // Scale intensity between 1 and 2 based on delta's distance from threshold up to maxIntensityDelta
        const scaledIntensity = 1 + (positiveDelta - normalMovementThreshold) / (maxIntensityDelta - normalMovementThreshold);
        
        // Clamp the intensity between 0 and 2
        return Math.max(0, Math.min(2, scaledIntensity));
    }
}

// Simplified logic to select movement based on direction
function determineMovement(deltaX, deltaY, fly_movement) {  
    if ((deltaX > 0) && (Math.abs(deltaX) > Math.abs(deltaY))) return fly_movement.forward;
    if ((deltaX < 0) && (Math.abs(deltaX) > Math.abs(deltaY))) return fly_movement.backward;
    if ((deltaY < 0) && (Math.abs(deltaX) < Math.abs(deltaY))) return fly_movement.upward;
    if ((deltaY > 0) && (Math.abs(deltaX) < Math.abs(deltaY))) return fly_movement.downward;
    return null; // No movement or unrecognized movement
}

wings({...i})
let activeMove = null;
let activeIntensity = null;

for (let g = 0; g < i.actionSteps; g++) {
    let [prevX, prevY] = [0,0]
    if(g != 0){
        let [prevX, prevY] = i.flight[g - 1]; 
    }
    const [currentX, currentY] = i.flight[g];
    
    const deltaX = currentX - prevX;
    const deltaY = currentY - prevY;
    
    const intensityX = calculateIntensity(deltaX);
    const intensityY = calculateIntensity(deltaY);

    // Assuming a mechanism to determine `i` relevant properties for `modTransform`
    pers.modTransform({m: i.m, p: i.p, dur:i.stepsDuration, tranX: currentX, tranY: currentY, ease: i.ease});
    
    // Logic to decide when to trigger motion and when to apply recover
    if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) { // Check for any movement
        let newIntensity = deltaX !== 0 ? intensityX : intensityY;
        newIntensity = Math.abs(deltaX) < Math.abs(deltaY)? intensityY : intensityX;
        let movement = determineMovement(deltaX, deltaY, fly_movement);
        
        //console.log(i.stepsDuration)
        if (movement){
            if (movement !== activeMove || newIntensity !== activeIntensity) {
                // Turn off the previous movement
                if (activeMove && activeMove.recover) {
                    activeMove.recover({...i , actionDuration:i.stepsDuration}, activeIntensity);
                }
                
                // Trigger new movement action
                if (movement.action) {
                    movement.action({...i , actionDuration:i.stepsDuration}, newIntensity);
                    activeMove = movement;
                    activeIntensity = newIntensity;
                }
            } 
        }
        
    }

    await sleep(i.stepsDuration); // Ensure this matches the actual duration of action
}

activeMove.recover({...i , actionDuration:i.stepsDuration}, activeIntensity);
await sleep(i.stepsDuration);
