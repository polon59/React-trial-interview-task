class CommonFinder{

    findCommons = (firstSet, secondSet) =>{
        const firstList = firstSet.split(" ");
        const secondList = secondSet.split(" ");
        let common = '';

        // console.log(firstSet);
        // console.log(secondSet);

        console.log(firstList);
        console.log(secondList);

        firstList.forEach(firstListWord => {
            secondList.forEach(secondListWord =>{
                if (firstListWord === secondListWord) {
                    common += ` ${firstListWord}`;
                }
            })
        });

        return common;
    }

}
export default CommonFinder;