export function get_symmetry_list(start: number , end: number){
    let res = []
    for(let i = start ; i < end ; i ++ ){
        if(is_symmetry_number(i)) { 
            res.push(i)
        }
    }   
    return res;
}

function is_symmetry_number(n : number){
    const nCharList = String(n).split("");
    for(let i = 0 ; i < nCharList.length ; i ++ ){
        if(nCharList[i] !== nCharList[nCharList.length - 1 - i]) return false;
    }
    return true
}
