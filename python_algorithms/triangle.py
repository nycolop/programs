user_row_input = int(input('Insert the triangle rows: '))

for i in range(user_row_input):
  user_input = i + 1
  result = []
  accumulator = 1

  for x in range(user_input):
    x_range = x + 1
    if x_range == 1:
      result.append(str(accumulator))
    else:
      accumulator += 2
      result.append(" ")
      result.append(str(accumulator))

  result.reverse()
  print("".join(result))
