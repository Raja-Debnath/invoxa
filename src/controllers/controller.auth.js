
export const register = async (req, res) => {
    res.status(201).json({
        status: "created",
        message: "user registered",
        timestamp: new Date().toISOString()
    })
}

export const login = async(req, res)=>{
    res.status(200).json({
        status: "ok",
        message: "user login",
        timestamp: new Date().toISOString()
    })
}