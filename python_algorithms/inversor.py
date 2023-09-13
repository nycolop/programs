cantidad_invertida = float(input('Ingrese una cantidad a invertir: '))
interes_anual = float(input('Ingrese el interes anual: '))
anios_invertir = float(input('Años a invertir: '))
capital = (cantidad_invertida * interes_anual / 100) * anios_invertir

print(f'Capital obtenido con esta inversión: {capital}')