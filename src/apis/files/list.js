export default function list () {

    const queryString = 'SELECT *, \'/api/files/get?name=\' & `files`.`name` AS `url` FROM `files`;';
    const values = null;
    const callback = null;

    return [ queryString, values, callback ];
}