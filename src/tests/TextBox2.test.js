import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('TextBox componente', () => {

    let box;
    let button;
    beforeEach(() => {
        render(<TextBox2 />); //aquí generamos el virtual DOM
        //el name de Box lo definimos en su atributo title (fijarse en el código)
        box = screen.getByRole('caja', { name: 'es una caja' });
        //el name del botón es el propio título que le ponemos al botón
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    test('la caja de texto se encuentra en el documento', () => {
        //comprobamos si la <Box> está en nuestro documento
        expect(box).toBeInTheDocument();
    });
    
    test('la caja con el texto tiene un color inicial', () => {
  
        //comprobamos si el Box tiene un color de fondo pink
        expect(box).toHaveStyle({
            color: 'pink'
        });
    });
    
    test('comprobar si al pulsar el botón cambia el botón de fondo', async () => {
     
        //usamos el userEvent. Lo primero que debemos hacer es inicializarlo:
        const user = userEvent.setup()
        //simulamos que el usuario clica el botón               
        await user.click(button);
        //Ahora comprobamos que al pulsar en el botón se cambia
        //el color de fondo de la caja (Box) a black.
        expect(box).toHaveStyle({
            color: 'black'
        });
    });
});