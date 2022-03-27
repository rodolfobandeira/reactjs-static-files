import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

/*
interface Opcao {
  id: number;
  label: string;
  }
 */

export default function Filtros() {
  function selecionarFiltro(opcao: IOpcao) {
    console.log(opcao);
  }

  return (
    <div>
      {filtros.map((opcao) => (
        <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))
      }
    </div>
  );
}
