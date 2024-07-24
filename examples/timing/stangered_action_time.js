        // Base
        i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
        i.actionDuration = (i.actionDuration === undefined) ? 500 : i.actionDuration;
        i.actionSteps = (i.actionSteps === undefined) ? 10 : i.actionSteps;

        // Person
        let pers = person.anim.prim
        let Head = person.UpperBody.Head.anim.prim
            let Eyes = person.UpperBody.Head.Face.Eyes.anim.prim
        let upBo = person.UpperBody.anim.prim
        let Back = person.UpperBody.Back.anim.prim
        let larm = person.UpperBody.LeftY.Arm.anim.prim
        let lfor = person.UpperBody.LeftY.Fore.anim.prim
        let rarm = person.UpperBody.Right.Arm.anim.prim
        let rfor = person.UpperBody.Right.Fore.anim.prim
        let loBo = person.LowerBody.anim.prim
        let lleg = person.LowerBody.LeftY.Leg.anim.prim 
        let lcaf = person.LowerBody.LeftY.Calf.anim.prim
        let rleg = person.LowerBody.Right.Leg.anim.prim
        let rcaf = person.LowerBody.Right.Calf.anim.prim

        pers.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:40,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:2,ease:i.ease})
        lleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10,ease:i.ease})
        rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:20,ease:i.ease})
        larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:-2,skewX:0,skewY:0,rotat:50,ease:i.ease})
        rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:-10,tranY:-15,scalX:0,scalY:-2,skewX:0,skewY:0,rotat:-50,ease:i.ease})
        await sleep(i.actionDuration/3)
        lcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10,ease:i.ease})
        rcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:-0.1,scalY:-0.1,skewX:0,skewY:0,rotat:-5,ease:i.ease})   
        await sleep(i.actionDuration/3)
        rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:-30,ease:i.ease})
        rcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0.1,scalY:0.1,skewX:0,skewY:0,rotat:5,ease:i.ease}) 
        await sleep(i.actionDuration/3)
        larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:0.1,scalY:0.2,skewX:0,skewY:0,rotat:-40,ease:i.ease})
        rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:15,tranY:-10,scalX:0.1,scalY:0.2,skewX:0,skewY:0,rotat:40,ease:i.ease})
        await sleep(i.actionDuration/3)
        lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:0.1,scalY:0.2,skewX:0,skewY:0,rotat:-60,ease:i.ease})
        rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration/3,tranX:0,tranY:0,scalX:0.1,scalY:0.2,skewX:0,skewY:0,rotat:60,ease:i.ease})
