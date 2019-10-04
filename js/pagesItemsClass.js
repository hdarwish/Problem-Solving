// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.pagedcollection = [];
  this.items=collection;
  // Loop through collection
  collection.forEach(val => {
    // Get last element
    const last = this.pagedcollection[this.pagedcollection.length - 1];
   
    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === itemsPerPage) {
      this.pagedcollection.push([val]);
    } else {
      last.push(val);
    }
  });
 
 }
 PaginationHelper.prototype.itemCount = function() {
  return this.items.length;
}

 PaginationHelper.prototype.pageCount = function() {
    return this.pagedcollection.length;
  }
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    return this.pagedcollection[pageIndex].length;
  }

  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    var pageIndex = -1;
    if(itemIndex<0 || itemIndex > this.items.length-1) return pageIndex;
    this.pagedcollection.forEach(coll =>{
      if(itemIndex+1>=coll.length){
        pageIndex++;
        itemIndex-=coll.length;
      }
    });
    return pageIndex;
  }
// var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
var collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var helper = new PaginationHelper(collection, 10);
console.log(helper.itemCount()); //should == 2