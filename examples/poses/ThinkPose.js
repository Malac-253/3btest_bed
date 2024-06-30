specific.ThinkPose = {}
specific.ThinkPose.Fold = async function (i){
    // Base
    i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
    i.actionDuration = (i.actionDuration === undefined) ? 500 : i.actionDuration;

    // Person
    let pers = person.anim.prim
    let Head = person.UpperBody.Head.anim.prim
        let Eyes = person.UpperBody.Head.Face.Eyes.anim.prim
    let upBo = person.UpperBody.anim.prim
    //let Back = person.UpperBody.Back.WingLeftY.anim.prim
    let Back = person.UpperBody.Back.anim.prim
    let larm = person.UpperBody.LeftY.Arm.anim.prim
    let lfor = person.UpperBody.LeftY.Fore.anim.prim
    let lhad = person.UpperBody.LeftY.Hand.anim.prim
    let rarm = person.UpperBody.Right.Arm.anim.prim
    let rfor = person.UpperBody.Right.Fore.anim.prim
    let rhad = person.UpperBody.Right.Hand.anim.prim

    rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:3,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-30,ease:i.ease})
    larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:-70,ease:i.ease})
    rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:-5,tranY:12,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-150,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:-1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-40,ease:i.ease})
    rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.02,scalY:0.02,skewX:0,skewY:0,rotat:10,ease:i.ease})
    lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.02,scalY:0.02,skewX:0,skewY:0,rotat:-10,ease:i.ease})
    
    Head.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:-10,tranY:5,scalX:0.05,scalY:0.05,skewX:0,skewY:0,rotat:5,ease:i.ease})
    
    await sleep(i.actionDuration)
}
specific.ThinkPose.Recover = async function (i){
    // Base
    i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
    i.actionDuration = (i.actionDuration === undefined) ? 500 : i.actionDuration;

    // Person
    let pers = person.anim.prim
    let Head = person.UpperBody.Head.anim.prim
        let Eyes = person.UpperBody.Head.Face.Eyes.anim.prim
    let upBo = person.UpperBody.anim.prim
    //let Back = person.UpperBody.Back.WingLeftY.anim.prim
    let Back = person.UpperBody.Back.anim.prim
    let larm = person.UpperBody.LeftY.Arm.anim.prim
    let lfor = person.UpperBody.LeftY.Fore.anim.prim
    let lhad = person.UpperBody.LeftY.Hand.anim.prim
    let rarm = person.UpperBody.Right.Arm.anim.prim
    let rfor = person.UpperBody.Right.Fore.anim.prim
    let rhad = person.UpperBody.Right.Hand.anim.prim

    rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:-3,scalX:0,scalY:0,skewX:0,skewY:0,rotat:30,ease:i.ease})
    larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:70,ease:i.ease})
    rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:5,tranY:-12,scalX:0,scalY:0,skewX:0,skewY:0,rotat:150,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:1,scalX:0,scalY:0,skewX:0,skewY:0,rotat:40,ease:i.ease})
    rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.02,scalY:-0.02,skewX:0,skewY:0,rotat:-10,ease:i.ease})
    lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.02,scalY:-0.02,skewX:0,skewY:0,rotat:10,ease:i.ease})
    
    Head.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:10,tranY:-5,scalX:-0.05,scalY:-0.05,skewX:0,skewY:0,rotat:-5,ease:i.ease})
    
    await sleep(i.actionDuration)
}