function comparaNumeros(x, y){
    const primeiraFrase = criaPrimeiraFrase(x, y);
    const segundaFrase = criaSegundaFrase(x, y);

    return `${primeiraFrase} ${segundaFrase}`;
    }

    function criaPrimeiraFrase(x, y){
        let iguais = '';

        if(x !== y){
            iguais = 'não'
        }

        return `Os números ${x} e ${y} ${iguais} são iguais.`;
    }

    function criaSegundaFrase(x, y){
        const soma = x + y;

        let result10 = 'menor';
        let result20 = 'menor';
        const compara10 = soma > 10;
        const compara20 = soma > 20;

        if(compara10){
            result10 = 'maior';
        }

        if(compara20){
            result20 = 'maior';
        }

        return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`
    }

    alert(comparaNumeros(20, 20));