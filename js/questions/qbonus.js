import {getBonus} from "../API/data";

/***************************************
  QUESTION Bonus : Tableau
      Classement des amis par activité
      (somme du nombre de statuts, messages et notations effectuées)
****************************************/
const questionBonus = () => {
    getBonus( data => {
        const sortedData = data.sort( (a,b) => a.popularite-b.popularite )
        console.log("yeaaah boyyy", sortedData);
    });
};
export default questionBonus;
