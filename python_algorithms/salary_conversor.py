local_currency = float(input('Insert the equivalent of "1 USD" in your local currency (Ex: 300): '))
month_salary = float(input('Monthly salary to convert in USD: '))
currency_type = input('Insert your currency (ex: ARS, USD): ')
convertion = month_salary * local_currency

print(f'Monthly salary converted to your local currency: {convertion} {currency_type}')