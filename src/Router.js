// ROUTER VAI GUARDAR TODA A NOSSA LOGICA DE ROTEAMENTE - TODAS AS PAGINAS ESTARAO LA

// import { StackNavigator }from "react-navigation";
import { createStackNavigator }from "react-navigation";
import PaginaLogin from "./pages/PaginaLogin";
import SeriesPage from "./pages/SeriesPage";


/*2 parametros
- config das paginas
- Objeto de configuração - Configuração default de todas as paginas
*/
// export default StackNavigator({
export default createStackNavigator({
  "PaginaPrincipal": {
    screen: SeriesPage
  },
  "Login": {
    screen: PaginaLogin,
    navigationOptions: {
      title: "Bem vindo!",
    }
  },

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
