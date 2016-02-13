var Step = function () {
    this.data = {
        is_root:false,
        is_leaf:false,
        id: null,
        given: null,
        when: null,
        then: null,
        parent_id:null
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
    }
    this.getID = function () {
        return this.data.id;  
    }
    this.getParentID = function () {
        return this.data.parent_id;    
    }
};

module.exports = function (info) {
    var instance = new Step();
    instance.fill(info);
    return instance;
};