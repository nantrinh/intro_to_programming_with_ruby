def get_grade(score1, score2, score3)
  avg = [score1, score2, score3].sum / 3
  case avg 
  when 90..Float::INFINITY then 'A'
  when 80..89  then 'B'
  when 70..79  then 'C'
  when 60..69  then 'D'
  when 0..59   then 'F'
  end
end

puts get_grade(95, 90, 93) == "A"
puts get_grade(50, 50, 95) == "D"

