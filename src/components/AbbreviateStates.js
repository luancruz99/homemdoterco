import React from 'react';

export default AbbreviateStates = (string) => {
   let abreviated;
   switch (string) {
      case 'Acre':
         abreviated = 'AC';
         break;
      case 'Acre':
         abreviated = 'AL';
         break;
      case 'Amapá':
         abreviated = 'AP';
         break;
      case 'Amazonas':
         abreviated = 'AM';
         break;
      case 'Bahia':
         abreviated = 'BA';
         break;
      case 'Ceará':
         abreviated = 'CE';
         break;
      case 'Distrito Federal':
         abreviated = 'DF';
         break;
      case 'Espírito Santo':
         abreviated = 'ES';
         break;
      case 'Goiás':
         abreviated = 'GO';
         break;
      case 'Maranhão':
         abreviated = 'MA';
         break;
      case 'Mato Grosso':
         abreviated = 'MT';
         break;
      case 'Mato Grosso do Sul':
         abreviated = 'MS';
         break;
      case 'Minas Gerais':
         abreviated = 'MG';
         break;
      case 'Pará':
         abreviated = 'PA';
         break;
      case 'Paraíba':
         abreviated = 'PB';
         break;
      case 'Paraná':
         abreviated = 'PR';
         break;
      case 'Pernambuco':
         abreviated = 'PE';
         break;
      case 'Piauí':
         abreviated = 'PI';
         break;
      case 'Roraima':
         abreviated = 'RR';
         break;
      case 'Rondônia':
         abreviated = 'RO';
         break;
      case 'Rio de Janeiro':
         abreviated = 'RJ';
         break;
      case 'Rio Grande do Norte':
         abreviated = 'RN';
         break;
      case 'Rio Grande do Sul':
         abreviated = 'RS';
         break;
      case 'Santa Catarina':
         abreviated = 'SC';
         break;
      case 'São Paulo':
         abreviated = 'SP';
         break;
      case 'Sergipe':
         abreviated = 'SE';
         break;
      case 'Tocantins':
         abreviated = 'TO';
         break;
   }

   return abreviated;
}



