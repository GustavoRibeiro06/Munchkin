import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
  }

  from "react-navigation";

  import index from "./telas/index";
  import play from "./telas/play";

  const Routes = createAppContainer(
    createStackNavigator({
        index,
        play,
    })
  );

  export default Routes;

