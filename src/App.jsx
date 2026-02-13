import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HackathonForm from "./pages/HackathonForm";
import PaymentPage from "./pages/PaymentPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HackathonForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
