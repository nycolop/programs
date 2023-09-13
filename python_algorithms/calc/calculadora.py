from funciones import restar, sumar, dividir, multiplicar

def options():
    print("Ingrese una opcion: ")
    print("1 - Sumar")
    print("2 - Restar")
    print("3 - Multiplicar")
    print("4 - Dividir")
    print("5 - Salir de la calculadora")

salir = False
while not salir:
    options()
    input_opcion = int(input("Escriba la opción: "))

    if input_opcion == 5:
        salir = True
        print("Hasta luego!")
        break

    input_n1 = float(input("Ingrese n1: "))
    input_n2 = float(input("Ingrese n2: "))

    if input_opcion == 1:
        resultado_suma = sumar(n1=input_n1, n2=input_n2)
        print(
            f"{input_n1} + {input_n2} = {resultado_suma}")
    elif input_opcion == 2:
        resultado_resta = restar(n1=input_n1, n2=input_n2)
        print(
            f"{input_n1} - {input_n2} = {resultado_resta}")
    elif input_opcion == 3:
        resultado_multiplicacion = multiplicar(n1=input_n1, n2=input_n2)
        print(
            f"{input_n1} x {input_n2} = {resultado_multiplicacion}")

    elif input_opcion == 4:
        if input_n2 == 0:
            print("No es posible dividir entre 0.")
        else:
            resultado_division = dividir(n1=input_n1, n2=input_n2)
            print(
                f"{input_n1} / {input_n2} = {resultado_division}")
