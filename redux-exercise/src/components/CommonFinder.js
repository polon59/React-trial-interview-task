class CommonFinder{

    findCommons = (firstSet, secondSet) =>{
        const firstList = firstSet.split(" ");
        const secondList = secondSet.split(" ");
        let common = '';

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