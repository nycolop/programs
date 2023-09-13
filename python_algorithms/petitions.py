# Se instala el packete "requests" con: "pip install requests" en la terminal
from requests import get, post # y de ese modulo requests que instalaste importas las peticiones get, post que son todos funciones

url_path = 'https://jsonplaceholder.typicode.com' # la base url para la peticion se carga en una variable, para no repetir codigo

def opciones(): # Creas las opciones en una funcion y devolves la opcion elegida por el usuario
    print(
        '1 = Obtener un post\n'
        '2 = Crear un post\n'
        '3 = Obtener los comentarios de un post\n'
        '4 = Salir\n'
    )
    opcion = int(input('Selecciona una opcion: '))
    return opcion # <- Devuelve la opcion elegida por el usuario

salir = False # Variable que hace salir el bucle, cuando sea True

while not salir: # Mientras salir sea falso
    opcion = opciones() # Llamamos a las opciones y que nos devuelve la opcion que eligio el usuario y lo guardamos en esta variable

    if opcion == 4: # chequeamos si la opcion es la 4 (las opciones estan arriba), y cambiamos salir a true para que termine el bucle
        salir = True
    elif opcion == 1 or opcion == 3: # Si opcion es 1 o 3 hacer una peticion de tipo get y preguntarle el id del post/comment a pedir
        post_id = input('Ingrese el ID del post a solicitar: ') # Preguntamos al usuario el id del post a pedir, y lo pasamos a integer
        if opcion == 1:
            # Si el usuario pidio obtener un post
            try:
                url = url_path + '/posts/' + post_id
                post = get(url) # Unimos el url principal que la habiamos guardado como variable y le unimos la ruta /posts + el id que eligio del post el usuario
                print("Petición exitosa, resultado: ")
                print(post.json()) # Intentamos hacer la peticion y si todo sale bien la mostramos en pantalla
            except Exception as e:
                print('Ha ocurrido un error...') # SI hubo un error le decimos que hubo un error
                print(e)
        else:
            # Si es la opcion 3, obtener los comentarios del post
            try:
                comentarios = get(url_path + '/posts/' + post_id + '/comments') # es lo mismo pero se le suma la ruta comments
                print("Petición exitosa, resultado: ")
                print(comentarios.json())
            except Exception as e:
                print('Ha ocurrido un error...')
                print(e)
    elif opcion == 2:
        # crear un post
        datos = {} # Hacemos los datos a enviar en este post dinámicos preguntandole al usuario, y los guardamos
        cantidad_datos = int(input('¿Cuántos datos quieres mandar?: '))

        for palabra in range(cantidad_datos):
            key = input('Key: ')
            valor = input('Valor: ')
            datos[key] = valor

        try:
            response = post(url_path + '/posts', datos) # Y luego lo mandamos en el post directamente
            print("Petición exitosa, resultado: ")
            print(response.json())
        except Exception as e:
            print('Ha ocurrido un error...')
            print(e)

        
        
# Isaac, cesar vazquez, nicolas lopez, lucas lau
# numero grupo: 5
# https://colab.research.google.com/drive/1AV9Uvy09gfiuE9_FJNXASaaZKNX7xqwo#scrollTo=hpOE3G00N7i0