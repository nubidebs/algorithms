#Example
#a = [1, 2, 3]
#b = [3, 2, 1]
#For elements *0*, Bob is awarded a point because a[0] .
#For the equal elements a[1] and b[1], no points are earned.
#Finally, for elements 2, a[2] > b[2] so Alice receives a point.
#The return array is [1, 1] with Alice's score first and Bob's second.

#Solution 1
def compareTriplets(a, b)
    $alicePoints = 0
    $bobPoints = 0
    a.each_with_index do |aliceScore, index|
        if aliceScore > b[index]
            $alicePoints += 1
        
        elsif aliceScore < b[index]
            $bobPoints += 1
        else
        end
    end
    return [$alicePoints, $bobPoints]
end


#Solution 2
def compareTriplets(a, b)
    a = gets.strip.split(' ').map(&:to_i)
    b = gets.strip.split(' ').map(&:to_i)
    c = a.zip(b)

    alice = 0
    bob = 0
    c.each do |a, b|
    if a > b
        alice += 1
    elsif a < b
        bob += 1
    end
    end

    puts "#{alice} #{bob}"


