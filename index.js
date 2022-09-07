var data=require('./data')
function getCompliment(){
    var len=data.length
    var ran=Math.floor(len*Math.random())	
    return data[ran];
}
module.exports={getCompliment:getCompliment}
