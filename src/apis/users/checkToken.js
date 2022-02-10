import userManager from '../../user-manager';

export default function checkToken ( req, res ) {
    const { token } = req.body ?? {};
    return res.send( Boolean( userManager.getUser( token )));
}