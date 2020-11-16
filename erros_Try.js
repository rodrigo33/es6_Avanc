class CustomError extends Error {
    constructor({message, data}){
        super(message)
        this.data = data
    }
}

try{  
    const name = 'rodrigo barbosa'

    const myError = new CustomError({
        message: 'message custom error',
        data:{
            type:'server error'
        }
    })
    throw myError
}   catch (err){
    if (err.data.type === 'server error'){        
    }else{

    }    
}   finally{
    console.log('keep going..')
}

