// react router
import { HashRouter, Route, Routes } from "react-router-dom";
// component
import MainLayout from "./layouts/MainLayout";
// style
import { ThemeProvider } from "./components/theme-provider";
// page
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Error from "./pages/Error";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/country/:name" element={<CountryDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
