# netshoes-test
### Leia todo o enunciado e toda a explicação de cada questão.
### Ao finalizar o teste, AGUARDE até que o time da Netshoes solicite para que cada um abra um Pull Request para que seu código seja disponibilizado e avaliado;


### Exercício 1 
Encontre o primeiro caractere que: <br />
- É uma vogal única na Stream
- Está após uma consoante que está após qualquer vogal

O término da leitura da stream deve ser garantido através do método hasNext(), ou seja, até que este método retorne falso.
 <br />

Exemplo 1: <br />
Input:  aAbBABacafe <br />
Output: e <br />
No exemplo, ‘e’ é o primeiro caractere Vogal da stream que não se repete após a primeira Consoante ‘f’o qual tem uma vogal ‘a’ como antecessora.<br />

Exemplo 2: <br />
Input:  hJuBtoErougixcfu <br />
Output: i <br />
No exemplo, ‘i’ é o primeiro caractere Vogal da stream que não se repete após a primeira Consoante ‘g’o qual tem uma vogal ‘u’ como antecessora. <br />
Nesse exemplo 'E' NÃO é a resposta correta pois embora não se repita no restante da stream, sua antecessora não é uma consoante. <br />

Outros exemplos podem ser verificados nos testes implementados  ```/netshoes-test-frontend/test/question1/index_test.js``` 

Regras e orientações:
1. Uma chamada para hasNext() irá retornar se a stream ainda contem caracteres para processar;
2. Uma chamada para next() irá retornar o próximo caractere a ser processado na stream ou 0 caso não possuam mais caracteres;
3. Não será possível reiniciar o fluxo da leitura da Stream;
4. Não poderá ser utilizado nenhum framework/lib, apenas código nativo. Dessa forma, não deve ser alterado o arquivo `package.json` do projeto;
5. Não devem ser alterados ou adaptados os testes já implementados e disponibilizados pela Netshoes;
6. Não deverá ser alterado o nome do método `firstChar` do arquivo `/netshoes-test-frontend/app/question1/index.js`. Também não poderá ser alterado o objeto já definido `streamApi`. 
7. Caso a Stream não possua caracteres que atendam aos requisitos, deverá ser retornado o caractere 0(Zero) conforme esperado pelos testes unitários;
8. Você nunca receberá uma stream vazia. Isso, inclusive, já está tratado no objeto `streamApi` disponibilizado e com testes unitários implementados. 
9. Não versione os códigos gerados por ferramenta/IDE;
10. A aplicação necessita atender aos cenários de testes já implementados propostos;
11. Para verificar se sua implementação está aderente aos testes unitários implementados, utilize o comando:<br />
    ```sh 
    npm run test-q1 
    ```

----------
### Exercício 2

Serão informadas duas versões: version1 e version2. Com base nessas versões, deverá ser retornado:
- 1 (um) caso a version1 for maior que a version2 (version1 > version2 return 1)
- 0 (zero) caso forem iguais (version1 == version2 return 0)
- -1 (menos 1) caso a version1 for menor que a version2 (version1 < version2 return -1)

Considere que ambas as Strings informadas estarão sempre preenchidas e conterão apenas dígitos e o caractere ponto (.) <br />
O caractere ponto (.) é utilizado apenas para separar a sequência de números. <br />
Por exemplo: a versão 1.2 é uma versão maior que a versão 1.1 ou 1.1.1 ou 1.1.1.10 (o código deve retornar 1). <br />
Entretanto, a versão 1.2 é anterior a versão 1.2.1 (o código deve retornar -1). <br />
Já as versões 1.2 e 1.2.0 são iguais (o código deve retornar 0). <br />

Outros exemplos podem ser verificados nos testes implementados em `/netshoes-test-frontend/test/question2/index_test.js`<br />

Regras e orientações:
1. Não deverá ser alterado o nome do método `compareVersion` do arquivo `/netshoes-test-frontend/app/question2/index.js`
2. Não poderá ser utilizado nenhum framework/lib, apenas código nativo. Dessa forma, não deve ser alterado o arquivo `package.json` do projeto;
3. Não devem ser alterados ou adaptados os testes já implementados e disponibilizados pela Netshoes;
4. A aplicação necessita atender aos cenários de testes já implementados propostos;
4. Para verificar se sua implementação está aderente aos testes unitários implementados, utilize o comando:<br />
  ```sh
  npm run test-q2 
  ```

## Boa prova!
