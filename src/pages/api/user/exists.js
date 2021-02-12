import User from "@/models/user";

async function checkIfExists(username) {

    return new Promise( async (resolve, reject) => {
        User.findOne( {
            username : username
        }, async function(err, user) {
            if(err) {
                console.log("ERROR", err)
                resolve( {
                    error : true, 
                    error_message : "Failed to check if user exists"
                })
            } else if (user) {
                resolve( {

                })
            }
        } )
    })


}



export default async (req, res) => {
  switch (req.method) {
    case "GET":
        let result = await checkIfExists(req.) 
    default:
      return res
        .status(400)
        .json({ error: true, error_message: "Failed to check if user exists" });
  }
};
