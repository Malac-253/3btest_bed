// specific.ChecksWrist = {}
// specific.ChecksWrist.RightArm = {}
// specific.ChecksWrist.RightArm.Up = async function (i){
//     return new Promise(async function(resolve, reject) { 
// Copy below
        i.ease = (i.ease === undefined) ? (d3.easePolyOut) : i.ease;
        i.actionDuration = (i.actionDuration === undefined) ? 3000 : i.actionDuration;

        let rarm = person.UpperBody.Right.Arm.anim.prim
        let rfor = person.UpperBody.Right.Fore.anim.prim
        let rhad = person.UpperBody.Right.Hand.anim.prim

        rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:5,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-40,ease:i.ease})
        await sleep((i.actionDuration)/3)
        rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30,ease:i.ease})
        await sleep((i.actionDuration)/3)
        rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:-20,ease:i.ease})
        await sleep((i.actionDuration)*0.90)
// Copy above
//         resolve();
//     })
// }
// specific.ChecksWrist.RightArm.Down = async function (i){
//     return new Promise(async function(resolve, reject) { 
// Copy below
        i.ease = (i.ease === undefined) ? (d3.easePolyOut) : i.ease;
        i.actionDuration = (i.actionDuration === undefined) ? 3000 : i.actionDuration;
        
        let rarm = person.UpperBody.Right.Arm.anim.prim
        let rfor = person.UpperBody.Right.Fore.anim.prim
        let rhad = person.UpperBody.Right.Hand.anim.prim

        rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:5,scalX:0,scalY:0,skewX:0,skewY:0,rotat:40,ease:i.ease})
        await sleep((i.actionDuration)/3)
        rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30,ease:i.ease})
        await sleep((i.actionDuration)/3)
        rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:20,ease:i.ease})
        await sleep((i.actionDuration)*0.90)
// Copy above
//         resolve();
//     })
// }
// specific.ChecksWrist.LeftYArm = {}
// specific.ChecksWrist.LeftYArm.Up = async function (i){
//     return new Promise(async function(resolve, reject) { 
// Copy below

        i.ease = (i.ease === undefined) ? (d3.easePolyOut) : i.ease;
        i.actionDuration = (i.actionDuration === undefined) ? 3000 : i.actionDuration;

        let larm = person.UpperBody.LeftY.Arm.anim.prim
        let lfor = person.UpperBody.LeftY.Fore.anim.prim
        let lhad = person.UpperBody.LeftY.Hand.anim.prim

        larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-70,ease:i.ease})
        await sleep((i.actionDuration)/3)
        lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-40,ease:i.ease})
        await sleep((i.actionDuration)/3)
        lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:-40,ease:i.ease}) 
        await sleep((i.actionDuration)*0.90)
// Copy above
        // resolve();
//     })
// }
// specific.ChecksWrist.LeftYArm.Down = async function (i){
//     return new Promise(async function(resolve, reject) { 
// Copy below
        i.ease = (i.ease === undefined) ? (d3.easePolyOut) : i.ease;
        i.actionDuration = (i.actionDuration === undefined) ? 3000 : i.actionDuration;

        let larm = person.UpperBody.LeftY.Arm.anim.prim
        let lfor = person.UpperBody.LeftY.Fore.anim.prim
        let lhad = person.UpperBody.LeftY.Hand.anim.prim

        larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:70,ease:i.ease})
        await sleep((i.actionDuration)/3)
        lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:40,ease:i.ease})
        await sleep((i.actionDuration)/3)
        lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:40,ease:i.ease}) 
        await sleep((i.actionDuration)*0.90)
        
// Copy above
        // resolve();
//     })
// }