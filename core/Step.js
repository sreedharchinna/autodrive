var Step = function () {
    this.data = {
        id: null,
        given: null,
        when: null,
        then: null
    };
    
    this.fill = function (info) {
        for(var prop in this.data){
            if(this.data[prop] !== 'undefined'){
                this.data[prop] = info[prop];
            }
        }
    }
    
    this.getStep = function () {
        return this.data;  
    };    
};

module.exports = function (info) {
    var instance = new Step();
    instance.fill(info);
    return instance;
};