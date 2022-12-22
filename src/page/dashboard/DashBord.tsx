import { FerramentasDeDatalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={(
        <FerramentasDeDatalhe
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={false}
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
