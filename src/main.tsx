import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { StrictMode } from "react";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Platform from "./pages/Platform";
import DownloadLayout from "./layout/DownloadLayout";
import Privacy from "./pages/Privacy";
import ToastProvider from "./context/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="privacypolicy" element={<Privacy />} />
            <Route path="verify" />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="download" element={<DownloadLayout />}>
            <Route path=":platform" element={<Platform />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </ToastProvider>
  </StrictMode>,
);
