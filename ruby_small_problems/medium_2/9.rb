# walk through given array
#
# ### count variable ###
# maintain a count of swaps done each time you go through the array
# increment every time you make a swap
# reset to 0 when you reach the end of the array
#
# compare two numbers, if the one with smaller index > one with larger
# index, swap them, else keep moving
#
# return sorted array

def bubble_sort!(arr)
  loop do
    count = 0
    (0..arr.size - 2).each do |idx|
      if arr[idx] > arr[idx + 1] 
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx] 
        count += 1
      end
    end
    break if count == 0
  end
end

array = [5, 3]
bubble_sort!(array)
#array == [3, 5]
p array

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
#array == [1, 2, 4, 6, 7]
p array

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
#array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p array
