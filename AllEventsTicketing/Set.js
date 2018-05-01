function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        //intersection(listA, listB): resultSet
        //BEGIN
        // If the inputs are invalid then
        	// return errorCode
        // Instructions to perform the main task
			// Loop through listA and compare to loop through ListB
			// If compare is true add to new array
		// return the output value
        //END

        if (listA === null || listB === null) {
            return null;
        }
        for (i = 0; i < listA.length; i++) {
            for (j = 0; j < listB.length; j++) {
                if (listA[i] === listB[j]) {
                    resultList.push(listA[i]);
                }
            }
        }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }
        var intersection = this.intersection(listA, listB);
        var difference = this.symmetricDifference(listA, listB);
        resultList = intersection.concat(difference);
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }
        for (i = 0; i < listA.length; i++) {
            var found = false;
            for (j = 0; j < listB.length; j++) {
                if (listA[i] === listB[j]) {
                    found = true;
                    break;
                }
            }
            if (found === false) {
                resultList.push(listA[i]);
            }
        }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }
        var complimentA = this.relativeComplement(listA, listB);
        var complimentB = this.relativeComplement(listB, listA);
        resultList = complimentA.concat(complimentB);
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
