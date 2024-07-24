let larm = person.UpperBody.LeftY.Arm.anim.prim
let lfor = person.UpperBody.LeftY.Fore.anim.prim
let lhad = person.UpperBody.LeftY.Hand.anim.prim


larm.modTransform({dur:1000,tranX:10,tranY:0,rotat:0})
lfor.modTransform({dur:1000,tranX:10,tranY:0,rotat:0}) 
lhad.modTransform({dur:1000,tranX:10,tranY:0,rotat:0}) 
await sleep(1000)
    
larm.modTransform({dur:1000,tranX:0,tranY:0,rotat:10})
lfor.modTransform({dur:1000,tranX:0,tranY:0,rotat:10}) 
lhad.modTransform({dur:1000,tranX:0,tranY:0,rotat:10}) 
await sleep(1000)

larm.modTransform({dur:1000,tranX:0,tranY:0,rotat:10})
lfor.modTransform({dur:1000,tranX:0,tranY:0,rotat:10}) 
lhad.modTransform({dur:1000,tranX:0,tranY:0,rotat:10}) 
await sleep(1000)