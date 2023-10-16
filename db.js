let products=[
    {
        "pro_name":"Mi Tv",
        "pro_model":"5X",
        "pro_price":31000,
        "pro_size":43
    },
    {
        "pro_name":"iPhone 15",
        "pro_model":"Pro",
        "pro_price":123000,
        "pro_size":6
    },
    {
        "pro_name":"HP Pavilion",
        "pro_model":"5C850",
        "pro_price":76000,
        "pro_size":14
    },
    {
        "pro_name":"Nokia",
        "pro_model":"6.1 Plus",
        "pro_price":120000,
        "pro_size":5.6
    }
]

const find=()=>{
  return products  
}

const save=(obj)=>{
    products.push(obj)
    return obj.pro_model+" has added"
}

const read=(id)=>{
    const hi=products.filter((v)=>{
        return v.pro_model==id
    })
    return hi
}

module.exports={find, save, read}