function letterCombinations(digits) {
  //Complete the function
	let arr = [];
    let val = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let fun = function helper(dig,arr,cur,val) {
        if(dig.length == 0) {
            arr.push(cur);
            return;
        }

        for(let i = 0;i <= 9; i++) {
            if(i == (dig.charAt(0)-'0')) {
                for(let j=0;j<val[i].length;j++) {
                    let temp = cur + val[i].charAt(j);
                    helper(dig.substring(1),arr,temp,val);
                }
            }
        }
    }

    fun(digits,arr,"",val);

    return arr[0] == "" ? [] : arr;
}

module.exports = letterCombinations;
