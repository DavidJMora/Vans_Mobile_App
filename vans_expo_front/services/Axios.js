// import Axios from "axios";

import axios from "axios";
import Constants from "expo-constants";

const { manifest } = Constants;
const url = `${manifest.debuggerHost.split(":").shift()}:3001`;

const Axios = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? `http://${url}` : "",
  timeout: 50000
});

export default Axios;
