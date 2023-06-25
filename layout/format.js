import Navbar from '../pages/components/navbar';

export default function Format({children}) {
  return (
  <main class="min-h-screen bg-gray-800">
    <Navbar>
    </Navbar>
    {children}
  </main>
  )
}