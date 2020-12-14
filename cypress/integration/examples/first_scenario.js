import AddElementsClass from './addElements';
import RemoveElementsClass from './remove_elements';

describe('Add and remove elements', () => {
    it('Opens page', () => {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/');

        var i;


        for (i = 0; i < 2; i++) {
            var a = new AddElementsClass;
            a.addElement();
            cy.wait(10);
        }

        var c = new RemoveElementsClass;
        c.removeSecondElement();

        var b = new RemoveElementsClass;
        b.removeFirstElement();
    
       
    }
    )
}
)


