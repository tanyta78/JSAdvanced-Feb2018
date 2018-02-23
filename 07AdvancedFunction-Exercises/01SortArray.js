function sortArray(arr,sortMethod) {
    let ascComparator=function(a,b){return a-b;};
    let descComparator=function(a,b){return b-a;};

    let sortingStraegies={
        'asc':ascComparator,
        'desc':descComparator
    };

    return arr.sort(sortingStraegies[sortMethod]);
}
sortArray([14, 7, 17, 6, 8], 'asc');