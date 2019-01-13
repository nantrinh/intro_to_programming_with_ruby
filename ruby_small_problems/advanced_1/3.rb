def transpose(matrix)
  arr = [[matrix[0][0], matrix[1][0], matrix[2][0]],
         [matrix[0][1], matrix[1][1], matrix[2][1]],
         [matrix[0][2], matrix[1][2], matrix[2][2]]]
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


