import { StackNavigator }from "react-navigation";
import PaginaLogin from "./src/pages/PaginaLogin";


/*2 parametros
- config das paginas
- Objeto de configuração - Configuração default de todas as paginas
*/
export default StackNavigator({
  "Login": {
    screen: PaginaLogin,
    navigationOptions: {
      title: "Bem vindo!",
    }
  }
}, {
  navigationOptions: {
    title: "Series!",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#20144D",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5"
    },
    headerTitleStyle: {
      color: "#fff",
      fontSize: 30
    }
  }
});
