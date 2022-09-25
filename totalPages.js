const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(rowsPerPage == null || undefined){
    return 1 
    // console.log(1)
    
}
else if(arrayItems == null || undefined){
    return undefined
    // console.log(undefined)
    
}
else {
    page = arrayItems.length/rowsPerPage
    if(page != Infinity){
        return Math.ceil(page)
    }else{
    return 1}
    // console.log(Math.ceil(page))
    
}
}
module.exports = totalPages
