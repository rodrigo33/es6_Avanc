//Promisses
//invoca o construtor de uma promisse
const doSomeThingPromise = () =>  new Promise((resolve, reject) => {    
    // throw new Error('Something went wrong')    
    setTimeout(function(){
        //did something
        resolve('first data');
    }, 1500);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    //aqui começo a tratar erros com throw sem a necessidade de try{} 
    //throw new Error('OOPS')   
    setTimeout(function(){
        //did something
        resolve('second data');
    }, 1000);
});
//forma de executar a promisse
// Promise.all([doSomeThingPromise(), doOtherThingPromise()])
//     .then(data => {
//         console.log(data => data[0].split(''))
//         console.log(data => data[1].split(''))
//     })    
//     .catch(err => {
//         console.log(err)
//     });
//status de uma promisse
//pending - pendente em execução
//Fulfilled - quando terminou de executar 
//Rejected - caso aconteça algum erro

//Outra forma de executar a promisse
Promise.race([doSomeThingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data)
})
   

//callbacks
/* function doSomeThing(callback){
    setTimeout(function(){
        //did something
        callback('first data');
    }, 1000);
}
function doOtherThing(callback){
    setTimeout(function(){
        //did other thing
        callback('second data')
    }, 1000);
}

function doAll(){
    try{
        doSomeThing(function(data){
            var processedData = data.split('');
        });
        try{
            doOtherThing(function(data2){
                var processedData2 = data2.split('');
        
                try{
                    setTimeout(function(){
                        console.log(processedData, processedData2);
                    }, 1000);
                } catch (err) {
                    //handle error
                }
                
            });
        } catch (err){
            //handle error
        }
        
    } catch (err){
        //handle error
    }    
}

doAll() */
