class UserController {

    x = 1;

    async index(request: Request, response: Response) {
    
        console.log('index',this.index);
        res.send('I am working');
    }

}

module.exports = new UserController();