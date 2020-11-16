
try{
  
    const name = 'rodrigo barbosa'

    const myError = new Error('custo message')
    throw myError
}   catch (err){
    console.log('Error:', err)
}   finally{
    console.log('keep going')
}

