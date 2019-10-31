/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



    示例:

    输入："23"
    输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
    说明:
    尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

 */

 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(nums) {
    const map = new Map()
    map.set('2','abc')
    map.set('3','def')
    map.set('4','ghi')
    map.set('5','jkl')
    map.set('6','mno')
    map.set('7','pqrs')
    map.set('8','tuv')
    map.set('9','wxyz')
    
    
    return get(map,nums)
}

var get = function(map, nums, index=0, res=[]){
    for(let i = index; i < nums.length; i++){
        const temp = map.get(nums[i]).split('')
        
        res = res.length ? 
                res.reduce((sum,cur)=>{
                    t = temp.map(i=>`${cur}${i}`)
                    sum.push(...t)
                    return sum
                },[]) 
                : [...temp]
        get(map, nums, index+1, res) 
    }
    
    return res
}