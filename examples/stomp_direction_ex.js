       // Person
       let pers = person.anim.prim
       let larm = person.UpperBody.LeftY.Arm.anim.prim
       let lfor = person.UpperBody.LeftY.Fore.anim.prim
       let rarm = person.UpperBody.Right.Arm.anim.prim
       let rfor = person.UpperBody.Right.Fore.anim.prim
       let lleg = person.LowerBody.LeftY.Leg.anim.prim 
       let lcaf = person.LowerBody.LeftY.Calf.anim.prim
       let rleg = person.LowerBody.Right.Leg.anim.prim
       let rcaf = person.LowerBody.Right.Calf.anim.prim

       // Basic
       i.ease = (i.ease === undefined) ? (d3.easeSinOut) : i.ease;
       i.actionDuration = (i.actionDuration === undefined) ? 1000 : i.actionDuration;
       // custom
       i.bodyRotation = (i.bodyRotation === undefined) ? 1 : i.bodyRotation;
       i.armRotation = (i.armRotation === undefined) ? 1 : i.armRotation;
       i.actionSteps = (i.actionSteps === undefined) ? 10 : i.actionSteps;
       i.Rightward = (i.backward === undefined) ? true : i.backward;  
       
       for (let j = 0; j < i.actionSteps; j++) { 
           if (i.Rightward){
               rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-60,ease:i.ease})        
           }else{
               lleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-60,ease:i.ease})        
           }
           rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-20*i.armRotation,ease:i.ease})
           larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:20*i.armRotation,ease:i.ease})
           await sleep(i.actionDuration/2)
           if (i.Rightward){
               rcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:60,ease:i.ease})
               lleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5,ease:i.ease})
           }else{
               lcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:60,ease:i.ease})
               rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5,ease:i.ease})
           }
           rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*i.armRotation,ease:i.ease})
           lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*i.armRotation,ease:i.ease})
           pers.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:10,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5*i.bodyRotation,ease:i.ease})
           await sleep(i.actionDuration/2)
           rarm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:20*i.armRotation,ease:i.ease})
           larm.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-20*i.armRotation,ease:i.ease})
           await sleep(i.actionDuration/2)
           if (i.Rightward){
               rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:60,ease:i.ease})
               rcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-60,ease:i.ease})
           }else{
               lleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:60,ease:i.ease})
               lcaf.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-60,ease:i.ease}) 
           }
           rfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-10*i.armRotation,ease:i.ease})
           lfor.modTransform({m:i.m,p:i.p,dur:i.actionDuration,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:10*i.armRotation,ease:i.ease})
           await sleep(i.actionDuration/8)
           if (i.Rightward){
               lleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5,ease:i.ease})
           }else{
               rleg.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:0,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:5,ease:i.ease}) 
           }
           pers.modTransform({m:i.m,p:i.p,dur:i.actionDuration/4,tranX:-10,tranY:0,scalX:0,scalY:0,skewX:0,skewY:0,rotat:-5*i.bodyRotation,ease:i.ease})
           await sleep(i.actionDuration/4)
       }
