const smartGarbage = function (trash, bins) {
  if (Object.keys(bins)[0] === trash) {
    bins.waste += 1;
    
  } else if (Object.keys(bins)[1] === trash){
    bins.recycling += 1;
    
  } else if (Object.keys(bins)[2] === trash){
    bins.compost += 1;
    
  } return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

