class RemoveElementsClass {


    getFirstElement(){
        return cy.get('#elements > button:nth-child(1)');
    }

    getSecondElement(){
        return cy.get('#elements > button:nth-child(2)');
    }
    
    removeFirstElement() {
        return this.getFirstElement().click();
    }

    removeSecondElement () {
        return this.getSecondElement().click();
    }
}

export default RemoveElementsClass
