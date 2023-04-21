class Component{
    constructor(children = []){
        this.children = children 
    }
    render({

        describe('Test the Component:', () => {
            test('invalid inputs for thefunction()',  () => {
                expect( () => { Component.theFunction(0) } ).toThrow(`Child class must implement render() method.`);
            });
        }
    })
}