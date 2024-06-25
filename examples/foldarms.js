
// FoldArms.Fold Copy below
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

    rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:2,tranY:5,scalX:0,scalY:0.4,skewX:0,skewY:0,rotat:-50,ease:i.ease})
    larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0, scalY:0.1,skewX:0,skewY:0,rotat:-70,ease:i.ease})
    rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:10,scalX:0,scalY:-0.4,skewX:0,skewY:0,rotat:160,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:2  ,tranY:-1,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:-55,ease:i.ease})
    rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.02,scalY:0.02,skewX:0,skewY:0,rotat:10,ease:i.ease})
    lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.02,scalY:0.02,skewX:0,skewY:0,rotat:-10,ease:i.ease})

    await sleep(i.actionDuration)



    await sleep(2000) // IF used at the same time

// FoldArms.Recover Copy below

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

    rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:-2,tranY:-5,scalX:0,scalY:-0.4,skewX:0,skewY:0,rotat:50,ease:i.ease})
    larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:-0.1,skewX:0,skewY:0,rotat:70,ease:i.ease})
    rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:-10,scalX:0,scalY:0.4,skewX:0,skewY:0,rotat:-160,ease:i.ease})
    lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:-2,tranY:1,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:55,ease:i.ease})
    rhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.02,scalY:-0.02,skewX:0,skewY:0,rotat:-10,ease:i.ease})
    lhad.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:-0.02,scalY:-0.02,skewX:0,skewY:0,rotat:10,ease:i.ease})

    await sleep(i.actionDuration)
