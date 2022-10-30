function factory(library,orders){
    let finalArr = []
    for (const order of orders){
        let product = order.template
        for (const part of order.parts){
          product[part] = library[part] 
        }
        finalArr.push(product)
      }
      return finalArr
}
