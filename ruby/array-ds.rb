#Example
#A = [1,2,3]
#Return
#[3,2,1]


def reverseArray(a)
    resultArray = []
    a.reverse_each do
        |x| resultArray.push(x)
    end
    
   return resultArray
end


def reverseArray(a)
    return a.reverse()
 end