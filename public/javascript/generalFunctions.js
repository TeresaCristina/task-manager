/*13 January, 2020
Teresa Costa*/

module.exports = function() {

    /*write all the helper functions in here!!!!!!!!*/
    
    //give today`date in a form of a string (YYYY-MM-DD)
    this.todayDate = function() {
        
        const padding = `0`;
        const delimiter = `-`; 
        let today = new Date();
        let month = today.getMonth()+1; 
        let day =  today.getDate();
        let year = today.getFullYear();
        
        if ( month < 10) { month = padding + month};
        if (day < 10) {day = padding + day};
        
        return today = `${year}` + delimiter + `${month}` + delimiter + `${day}`;
    
    };

}