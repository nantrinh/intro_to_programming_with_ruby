require 'pry'
class Sieve
  attr_accessor :n, :arr, :marked

  def initialize(n)
    @n = n
    @arr = (2..n).to_a
    # initialize way to keep track of markings
    @marked = {}
    arr.each do |x|
      @marked[x] = false
    end
    p marked 
  end

  def primes

    # take the next available unmarked number in your list
    idx = 0
    while idx < arr.size
      num = arr[idx]
      mark_all_multiples(num) unless marked[num] 
      idx += 1
    end
    marked.select {|k,v| !v}.keys
  end

  def mark_all_multiples(num)
    multiples = []

    mult = num + num
    while mult <= n
      multiples << mult
      mult += num
    end

    multiples.each do |x|
      if !marked[x]
        marked[x] = true
      end
    end
  end
end
