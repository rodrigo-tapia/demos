import { Router, Request, Response, NextFunction} from "express";

interface RquequestWithBody extends Request{
  body: {[key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction): void{
  if(req.session && req.session.loggedIn){
    next();
    return;
  }else{
    res.status(403);
    res.send('Not permitted');
  }
}
const router = Router();

router.get('/login', (req: Request, res, Response) => {
  res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password">
      </div>
      <button>Submit</button>
    </form>
  `);
}); 

router.post('/login', (req: RquequestWithBody, res: Response) =>{
  const {email, password} = req.body;
  if(email && password && email === 'hi@hi.com' && password === 'password'){
    req.session = {loggedIn: true};
    res.redirect('/');
  }else{
    res.send('Invalid email or password');
  }
  
});

router.get('/', (req: Request, res: Response) => {
  if(req.session && req.session.loggedIn){
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href ="/logout">Logout</a>
      </div>
    `);
  }else{
    res.send(`
    <div>
      <div>You are not logged in </div>
      <a href ="/login">Login</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req:Request, res: Response) =>{
  res.send('welcome to protected router, logger user');
});

export { router };