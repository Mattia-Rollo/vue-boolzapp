
function correctDate(stringa) {

    const ArrayStringa = stringa.split(' ')
    const orario = ArrayStringa[1];
    const newArrayData = ArrayStringa[0].split('/');
    const dataString = newArrayData.reverse().join('/');
    const dataFinally =  dataString + ' ' + orario;
    return dataFinally;
}