// ROUTER VAI GUARDAR TODA A NOSSA LOGICA DE ROTEAMENTE - TODAS AS PAGINAS ESTARAO LA

// import { StackNavigator }from "react-navigation";
import { createStackNavigator }from "react-navigation";
import PaginaLogin from "./pages/PaginaLogin";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetailPage from "./pages/SeriesDetailPage";


/*2 parametros
- config das paginas
- Objeto de configuração - Configuração default de todas as paginas
*/
// export default StackNavigator({
export default createStackNavigator({
  "Login": {
    screen: PaginaLogin,
    navigationOptions: {
      title: "Bem vindo!",
    }
  },
  "PaginaPrincipal": {
    screen: SeriesPage
  },
  "PaginaDetalhe": {
    screen: SeriesDetailPage,
    // navigationOptions: {
    //   title: "Página de Detalhes"
    // }
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
          // title: "Página de Detalhes"
          title: serie.title
      }
    }
  }

},{
  navigationOptions: {
    title: "Series!",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#20144D",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
      color: "#fff",
      fontSize: 30
    }
  }
});
