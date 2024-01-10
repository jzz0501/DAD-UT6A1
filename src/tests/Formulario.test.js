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
        text = screen.getByRole('input');
        button = screen.getByRole('button', {name: 'Submit'});
    })

    test('comprueba que se renderiza el botón', () => {
        //comprueba que se renderiza el botón
        expect(button).toBeInTheDocument();
    })

    test('comprueba que se renderiza el campo de texto (o sea, el <TextField>)', () => {
        //comprueba que se renderiza el campo de texto (o sea, el <TextField>)
        expect(text).toBeInTheDocument();
    })

    
    test('comprueba que se renderiza la cabecera de nivel 2', () => {
        //comprueba que se renderiza la cabecera de nivel 2
        expect(h2).toBeInTheDocument();
    })
    

    
    test('comprueba que cuando el usuario escribe su nombre en el campo de texto y luego pica en el botón se borra su nombre del campo de texto', async () => {
        //comprueba que cuando el usuario escribe su nombre en el campo de texto y luego pica en el botón se borra su nombre del campo de texto.
        const user = userEvent.setup();
        await user.type(text, 'zongzhen');
        await user.click(button);
        expect(text).toHaveStyle({
            value: ''
        });
    })

})