const request = require('request')

module.exports.getItems = (req, res) => {
    let data = [];
    const search = req.query.q;
    url = process.env.URL_API
    try {
        request(url,(err,response,body)=>{
        if (!err){
            const users = JSON.parse(body);
            for (user of users) {
                if(user.name.toUpperCase().includes(search.toUpperCase()) || user.username.toUpperCase().includes(search.toUpperCase())) 
                    data.push(user);
              }
            if(data.length <1) 
             res.status(200).json({message:'Item no found', code:400})
            else 
             res.status(200).json({data, code:200})
        }
    })
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports.getItemById = (req, res) => {
    const id = req.params['id'];
    url = process.env.URL_API+ `/${id}`
    try {
        request(url,(err,response,body)=>{
        if (!err){
            const user = JSON.parse(body);
            if(Object.entries(user).length === 0)
                res.status(200).json({data:user, code:200})
            else 
            res.status(200).json({data:user, code:400})
        }
    })
    } catch (error) {
        res.status(500).json({message:error})
    }
}