import Navbar from "../components/navbar";

export default function Format({ children }) {
  return (
    <main class="min-h-screen bg-gray-800">
      <Navbar></Navbar>
      {children}
    </main>
  );
}
