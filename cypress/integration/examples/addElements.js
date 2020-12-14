class AddElementsClass {


    getAddButton(){
        return cy.get('#content > div > button');
    }
    
    addElement(){
        return this.getAddButton().click();
    }
}

export default AddElementsClass


