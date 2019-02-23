class Sieve
  def initialize(n)
    @n = n
  end

  def primes
    # initalize data structure with all array elements marked
    # take the next available unmarked number in your list
    # mark all multiples of that number (NOT that number itself)
    # repeat until you have iterated through all elements in your list
    iterate_through = (2..@n).to_a
    @marked = {}
    iterate_through.each {|x| @marked[x] = false}  # all are unmarked
    iterate_through.each do |x|
      # if it is already marked leave it alone
      # if it is unmarked, mark all multiples
      mark_all_multiples(x) if !@marked[x]
    end
    # return array of the elements that are unmarked
    @marked.reject {|k,v| v}.keys
  end

  def mark_all_multiples(x)
    curr = x * 2
    while curr <= @n
      @marked[curr] = true
      curr += x
    end
  end
end
