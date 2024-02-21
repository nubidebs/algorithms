# There is a collection of input strings and a collection of query strings.
# For each query string, determine how many times it occurs in the list of input strings.
# Return an array of the results.

# Example
# stringlist = ['ab', 'ab'', 'abc']
# queries = ['ab', 'abc'', 'bc']
# There are 2 instances of 'ab', 1 of 'abc' and  0 of 'bc'. For each query, add an element to the return array, results = [2,1,0] .

def matchingStrings(stringList, queries)
    return queries.map do |query|
        stringList.select { |x| x === query }.length
    end
end


#function matchingStrings(stringList, queries) {
 #   const result = []
 #   queries.forEach((query)=> result.push(stringList.filter((x)=> query === x).length))
 
 #   return result
#}