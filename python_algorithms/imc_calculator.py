weight = float(input('Insert your weight in KG: '))
height = float(input('Insert your height in meters: '))
imc = weight / height
rounded_imc = round(imc, 2)

print(f'Tu índice de masa corporal es {rounded_imc}')