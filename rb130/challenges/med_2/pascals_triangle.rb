class Triangle
  def initialize(n_rows)
    @n_rows = n_rows
  end

  def rows
    arr = [[1]]
    arr << [1, 1] if @n_rows > 1
    while arr.size < @n_rows
      middle = []
      arr.last.each_cons(2) { |x, y| middle << x + y }
      arr << [1, middle, 1].flatten
    end
    arr
  end
end
