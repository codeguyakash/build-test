// import logo from './logo.svg';
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
// import Notch from "./components/Header/Notch";
// import FileUploader from "./components/FileUploader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />

          {/* <Route path="/" element={<Notch/>}/> */}
          {/* <Route path="/" element={<FileUploader/>}/> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
