# ibge-api-js

Script que realiza busca em uma API publica do IBGE. 
Deve usar a Lib Jquery para selecionar os elementos de input-select na DOM para que posam ser preenchido os municípios dinamicamente.

Abaixo esta o modelo do Select de Edição que deve user usado no HTML. O mesmo vale para o select de cadastro.
O medoto de edição utiliza o próprio json do script para realizar a consulta uma vez que o campo do Estado ja esta preenchido.

```html
 <select id="estadoBusca" name="estado" class="form-control form-control-sm">
                <option value="" selected></option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
            <label for="">Municipio</label>
            <select name="city" id="municipioBusca" class="form-control form-control-sm" readonly>
                <option value=""></option>
            </select>
        </div>
```
