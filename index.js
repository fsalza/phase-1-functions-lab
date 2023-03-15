// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hqLocation = 42
    if (street >= 42){
        return street - hqLocation
    }
    if (street <= 42){
        return hqLocation - street
    }
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock > endBlock){
        return (startBlock - endBlock) *264
    }
    if (startBlock < endBlock){
        return (endBlock - startBlock) *264
    }
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function calculatesFarePrice(startBlock, endBlock){
    if (distanceTravelledInFeet(startBlock, endBlock) <= 400){
        return 0
    }
    if (distanceTravelledInFeet(startBlock, endBlock) > 400 && distanceTravelledInFeet(startBlock, endBlock) <= 2000){
        return ((distanceTravelledInFeet(startBlock, endBlock)-400) * .02)
    }
    if (distanceTravelledInFeet(startBlock, endBlock) > 2000 && distanceTravelledInFeet(startBlock, endBlock) <= 2500){
        return 25
    }
    if (distanceTravelledInFeet(startBlock, endBlock) > 2500){
        return 'cannot travel that far'
    }
}
    