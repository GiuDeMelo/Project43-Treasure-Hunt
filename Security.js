class Security {

    constructor(){

    //Code 1
        this.access1 = createInput("Escreva a senha")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Conferir');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');

    //Code 2
        this.access2 = createInput("Escreva a senha")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Conferir');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

    //Code 3
        this.access3 = createInput("Escreva a senha")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Conferir');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//adicione código para o que acontece quando o terceiro botão for pressionado
        

    }
}