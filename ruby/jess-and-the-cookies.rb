#This solution was taken from the leaderboard
def cookies(k, array)
    main_heap = array.sort
    sub_heap = []
    operations = 0
    while ((main_heap.first && main_heap.first < k) || (sub_heap.first && sub_heap.first < k)) do
        return -1 if main_heap.size + sub_heap.size < 2
        first_cookie = (find_queue(main_heap, sub_heap) ? main_heap : sub_heap).shift
        second_cookie = (find_queue(main_heap, sub_heap) ? main_heap : sub_heap).shift
        sub_heap.push(combine(first_cookie, second_cookie))
        operations += 1
    end
    operations
end

def combine(a, b)
    a + b * 2 
end

def find_queue(main, sub)
    return true unless sub.first 
    return false unless main.first 
    main.first < sub.first ? true : false
end


#This solution does not pass all the tests
def cookies(k, a)
    iterations = 0
    array = a

    return -1  if a.empty?

    sorted = array.sort
    return -1 if sorted.first >= k
    new_digit = 0

    while newDigit < k
        new_digit = sorted.first + sorted[1] * 2  
        array = sorted.drop(2)
        array << newDigit       # array.push()
        iterations += 1 
        sorted = array
    end

    return iterations
end