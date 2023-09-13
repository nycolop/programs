import calendar
from datetime import datetime

user_month_input = int(input('Insert a month between 1 and 12: '))
current_year = datetime.now().year
days = calendar.monthrange(current_year, user_month_input)[1]
print(f'The desired month has {days} days')
