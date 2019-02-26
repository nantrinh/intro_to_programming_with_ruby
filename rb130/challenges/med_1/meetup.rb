# looked at solutions for help
class Meetup
  WEEKDAYS = [:sunday, :monday, :tuesday, :wednesday,
              :thursday, :friday, :saturday].freeze
  FIRST_DAY = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    last: -7,
    teenth: 13
  }.freeze

  def initialize(month, year)
    @date = Date.new(year, month, 1)
  end

  def day(weekday, schedule)
    temp = Date.new(@date.year, @date.month, FIRST_DAY[schedule])
    temp += 1 until temp.wday == WEEKDAYS.index(weekday)
    temp
  end
end
