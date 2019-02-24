class SecretHandshake
  BASE = 2
  ACTIONS = ['jump', 'close your eyes', 'double blink', 'wink']
  #ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump']

  def initialize(n)
    @n = n
  end

  def commands
    return [] if invalid?
    convert_n unless @n.is_a? Integer 
    arr = @n.to_s(BASE).chars
    res = [] 
    if arr.size <= 4
      action_subset = ACTIONS[-arr.size..-1]
      arr.each_with_index do |x, idx|
        res.unshift(action_subset[idx]) if x == '1'
      end
    else
      arr[1..-1].each_with_index do |x, idx|
        res << (ACTIONS[idx]) if x == '1'
      end
    end
    res
  end

  def invalid?
    !!@n.to_s.match(/[^0-9]/)
  end

  def convert_n
    @n = @n.to_i
  end
end
