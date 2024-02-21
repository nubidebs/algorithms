=begin 
https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/

Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
A palindrome is a string that reads the same forwards and backwards.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
 
Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")

Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4

Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
 

Constraints:
3 <= s.length <= 105
s consists of only lowercase English letters.


 ======= JS Solution ============================
var countPalindromicSubsequence = function (s) {
  let result = 0
  let uniqueChar = new Set(s)

  uniqueChar.forEach((char) => {
      let startIndex = s.indexOf(char)
      let endIndex = s.lastIndexOf(char)

      if (startIndex < endIndex){
          const subStringArr = [...new Set (s.substring(startIndex + 1, endIndex).split(''))]
          result += subStringArr.length
      }
  })
  return result
};

=end

def count_palindromic_subsequence(s)
    result = 0
    uniqueChars = s.split(//).uniq

    uniqueChars.each do |char|
      startIndex = s.index(char)
      endIndex = s.rindex(char)

      if startIndex < endIndex
      result += s[startIndex + 1..endIndex -1].split(//).uniq.size
      end
    end

    return result
end
