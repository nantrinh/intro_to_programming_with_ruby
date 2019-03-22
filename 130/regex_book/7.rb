def format_date(str)
  regex = /\A(\d{4})([\-\/])(\d{2})\2(\d{2})\z/
  if str.match(regex)
    str.sub(regex, '\4.\3.\1').gsub(/\//, '.')
  else
    str
  end
end

p format_date('2016-06-17') # -> '17.06.2016'
p format_date('2017/05/03') # -> '03.05.2017'
p format_date('2015/01-31') # -> '2015/01-31' (no change)
