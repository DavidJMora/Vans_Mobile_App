
const filterArray = (array, id) => {
    let filteredArray = array.filter(selected => { 
        return selected.category.categoryID.toString() === id 
    });
    
    return filteredArray
}

module.exports = {
    filterArray
}