var Quo = function(status) { 
    this.status = status;
}

Quo.prototype.get_status = function(){
    return this.status
}

module.exports = Quo
