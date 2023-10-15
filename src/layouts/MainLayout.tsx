// component
import NavBar from '@/components/NavBar';

export default function MainLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="p-4 flex flex-col gap-8"></main>
    </div>
  );
}
