import userEvent from "@testing-library/user-event";
import FormUsuario from "../components/FormUsuario";
import { render, screen } from "@testing-library/react";

describe('FormUsuario', () => {

    let h2;
    let text;
    let button;

    beforeEach(() => {
        render(<FormUsuario/>);
        h2 = screen.getByRole('heading', {level : 2});
        text = screen.getByLabelText('Nombre');
        button = screen.getByRole('button', {name: 'Submit'});
    })

    test('comprueba que se renderiza el botón', () => {
        //comprueba que el boton esta renderizado en el virtual DOM
        expect(button).toBeInTheDocument();
    })

    test('comprueba que se renderiza el campo de texto (o sea, el <TextField>)', () => {
        //comprueba que el campo de texto esta renderizado en el virtual DOM
        expect(text).toBeInTheDocument();
    })

    
    test('comprueba que se renderiza la cabecera de nivel 2', () => {
        //comprueba que el h2 esta renderizado en el virtual DOM
        expect(h2).toBeInTheDocument();
    })
    
    
    test('comprueba el funcionamiento de formulario', async () => {
        //comprueba que cuando el usuario escribe su nombre en el campo de texto y luego pica en el botón se borra su nombre del campo de texto.
        const user = userEvent.setup();
        await user.type(text, 'zongzhen');
        await user.click(button);
        expect(text.value).toBe('');
    })

})