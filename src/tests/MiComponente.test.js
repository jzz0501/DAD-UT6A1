import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {

        test('debe retornar un string vacio', () =>
        {   //compruebe que la función devuelve un string vacío si se le pasa un string vacío.
            //valor de string me devuelve un string vacio
            const result = titleCase('');
            expect(result).toBe('')
        })

        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })


    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });

    describe('divide', () => {
        test('comprobar que el tipo que devuelve es un número', () =>
        {   //comprobar que el tipo que devuelve es un número
            //valor me devuelve un numero
            const result = divide(2,2);
            expect(typeof result).toBe('number');
        })

        test('comprobar que si entra una string te devuelve null', () =>
        {   //comprobar que si entra una string te devuelve null (matcher toBeNull())
            //valor me devuelve un null
            const result = divide('hola',3);
            expect(result).toBeNull();
        })

        test('comprobar que realiza la división de 10 y 2', () => 
        {   //comprobar que realiza la división de 10 y 2, 
            //valor me devuelve un 5
            const result = divide(10,2);
            expect(result).toBe(5);
        })

        test('comprobar que realiza la división de 10 y 4', () => 
        {   //comprobar que realiza la división de 10 y 4 (aquí te puede ayudar el matcher toBeCloseTo()
            //valor me devuelve un 5
            const result = divide(10,4);
            expect(result).toBeCloseTo(2.5,1);
        })

        test('comprobar que la división de cualquier número y 0 te devuelve null', () => 
        {   //comprobar que la división de cualquier número y 0 te devuelve null
            //valor me devuelve un 5
            const result = divide(10,0);
            expect(result).toBeNull();
        })
       
    });

    describe('isapple', () => {
        
        test('comprobar que la función devuelva un resultado de tipo booelan', () => {
            //comprobar que la función devuelva un resultado de tipo booelan
            //valor me devuelve un boolean
            const result = isapple('manzana');
            expect(typeof result).toBe('boolean');
        })

        test('comprobar que si entra la string manzana devuelve true', () => {
            //comprobar que si entra la string manzana devuelve true
            //valor me devuelve un true
            const result = isapple('manzana');
            expect(result).toBe(true);
        })

        test('comprobar que si entra una string que no sea manzana devuelve false', () => {
            //comprobar que si entra una string que no sea manzana devuelve false
            //valor me devuelve un false
            const result = isapple('manza');
            expect(result).toBe(false);
        })

    })

});