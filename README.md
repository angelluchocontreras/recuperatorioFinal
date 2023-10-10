# Proyecto de E-commerce en React

Este proyecto es una aplicación web de comercio electrónico desarrollada en React. Permite a los usuarios explorar productos, agregarlos al carrito, realizar el procxso de checkout y más.


# Funcionalidades Principales
 
Explorar Productos: Los usuarios pueden navegar por la lista de productos en diferentes categorías (Remera, Pantalón, Buzo) usando la barra de navegación.

Ver Detalles del Producto: Al hacer clic en un producto, los usuarios pueden ver más detalles sobre ese producto, incluyendo su nombre, precio, descripción y stock disponible.

Agregar al Carrito: Los usuarios pueden agregar productos a su carrito de compras, especificando la cantidad deseada.

Carrito de Compras: Los usuarios pueden ver los productos que han agregado al carrito, así como el subtotal de la compra. También pueden eliminar productos del carrito.

Proceso de Checkout: Los usuarios pueden proceder al proceso de checkout, donde proporcionan su información personal (nombre, teléfono, email) para crear una orden ficticia. Después de crear la orden, el carrito se limpia.

Navegación: La aplicación utiliza React Router para la navegación entre páginas.

# Estructura del Proyecto
src/components: Contiene los componentes de React utilizados en la aplicación, como NavBar, Item, ItemDetail, Cart, Checkout, etc.
src/context: Contiene el contexto de carrito de compras (CartContext) y su proveedor (CartProvider) para administrar el estado global del carrito.
src/data: Contiene datos de ejemplo de productos y funciones de acceso a datos ficticios para simular la obtención de productos y detalles de productos.
src/App.js: Es el punto de entrada principal de la aplicación donde se configuran las rutas y se utiliza el proveedor de contexto.



## Correcciones
Corregi las rutas y ahora se puede navegar dentro de las paginas

Agrege un formulario para validar la compra que la persona pueda recibir el numero de orden


## Punto no realizado

Firebase

## explicacion del porque no se realizo 


la verdad se me complico estaba haciendo bien el principio pero nose que toque que me dejo de aparecer los productos y no pude encontrar la solucion y por solucionar mi cartItem se desconfiguro nose que toque pero recibe el producto pero la cantidad,el subtotal y el total no figura