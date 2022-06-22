//TODO This file should contain functions that take care of everything when someone attempts to add an arc. This means checking if the arc already exists. This does not mean that we don't try to show the user that an arc already exist by searching before adding. This function would simply be a failsafe if the above does not work or has been hacked.
//If the arc is truely new it is given a universal weighting of 1, a project weighting of 1 and a projectuser weigting of 1.
//If the arc already exists the universal weighting, is increased by 1. 
// project weigting and the project user weighting
//The fields for the project weigting and the project user weighting might not exist and need to be created before it can be given 1

function attemptAddArc(parentNode, type, project, user)