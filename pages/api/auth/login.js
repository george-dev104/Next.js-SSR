export default async function handler(req, res) {
    
    if(req.method == "GET"){
        console.log('POST METHOD');
        res.status(200).json({ message: 'Data received' }); 
    } else if(req.method == "POST"){
        var response = {
            userId : req.body.userId,
            password : req.body.password
        }
        res.status(200).json(response);
    } else {
        console.log('ALLOW METHOD');
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    
}